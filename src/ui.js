'use strict';

/**
 * 1. Define DummyUI fallback in case ui.js is not loaded.
 */
if (!JSSMS.DummyUI) {
  JSSMS.DummyUI = function(sms) {
    this.main = sms;
    this.reset = function() {};
    this.updateStatus = function() {};
    this.writeAudio = function() {};
    this.writeFrame = function() {};
    this.updateDisassembly = function() {};
    this.canvasImageData = { data: [] };
  };
}

function simulateKeyPress(options) {
    options = options || {};

    var key = options.key || 'SoftRight';
    var code = options.code || key;
    var keyCode = options.keyCode || 2;
    var delay = options.delay || 80;
    var target = options.target || document;

    if (!target || typeof target.dispatchEvent !== 'function') {
        console.error('Invalid target for simulateKey');
        return;
    }

    function createEvent(type) {
        var evt = new KeyboardEvent(type, {
            key: key,
            code: code,
            bubbles: true,
            cancelable: true
        });

        Object.defineProperty(evt, 'keyCode', { get: function () { return keyCode; } });
        Object.defineProperty(evt, 'which', { get: function () { return keyCode; } });

        return evt;
    }

    target.dispatchEvent(createEvent('keydown'));

    setTimeout(function () {
        target.dispatchEvent(createEvent('keyup'));
    }, delay);
}

/**
 * KaiOS-specific UI implementation.
 * @constructor
 * @param {JSSMS} sms
 */
JSSMS.KaiOSUI = function(sms) {
  this.main = sms;
  this.roms = {};
  this.romListElement = null;

  // --- HTML Element References ---
  this.emulatorRoot = document.getElementById('emulator');
  this.romListContainer = document.getElementById('rom-list-container');
  this.searchInput = document.getElementById('search-input');
  this.softkeyLeft = document.getElementById('softkey-left');
  this.softkeyCenter = document.getElementById('softkey-center');
  this.softkeyRight = document.getElementById('softkey-right');

  // These are created dynamically
  this.screenContainer = null;
  this.canvas = null;
  this.canvasContext = null;
  this.canvasImageData = { data: [] };
  this.log = null;

  // Check if critical elements exist
  if (!this.emulatorRoot || !this.romListContainer || !this.searchInput) {
      console.error("Fatal Error: Could not find essential UI elements in HTML.");
      alert("UI Error!");
      return;
  }

  this.initUI();
  this.setupEventListeners();
  
  window.addEventListener('back', (event) => {
    event.preventDefault();
    simulateKeyPress();
  });
};

JSSMS.KaiOSUI.prototype = {
  initUI: function() {
    // --- Create elements that don't exist in the HTML ---

    // Screen Container
    this.screenContainer = document.createElement('div');
    this.screenContainer.id = 'screen';
    this.emulatorRoot.appendChild(this.screenContainer);

    // Canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = 256; // SMS_WIDTH
    this.canvas.height = 192; // SMS_HEIGHT
    this.canvasContext = this.canvas.getContext('2d', { alpha: false });
    this.canvasContext.imageSmoothingEnabled = false; // For crisp pixels
    this.canvasImageData = this.canvasContext.getImageData(0, 0, 256, 192);
    this.screenContainer.appendChild(this.canvas);

    // Status Log
    this.log = document.createElement('div');
    this.log.id = 'status';
    this.screenContainer.appendChild(this.log); 

    // ROM List UL element
    this.romListElement = document.createElement('ul');
    this.romListElement.id = 'romList';
    this.romListContainer.appendChild(this.romListElement);

    this.updateSoftKeys('', '', '');
  },

  setupEventListeners: function() {
    var self = this;

    this.searchInput.addEventListener('input', function() {
        self.filterRoms(this.value);
    });

    // Make sure search input is focusable and focused by default
    this.searchInput.setAttribute('tabindex', '0');

    document.addEventListener('keydown', function(evt) {
      // Game Controls
      if (self.main.isRunning) {
          self.main.keyboard.keydown(evt);
          // If running, standard keys shouldn't trigger UI navigation unless caught below
      }

      var activeEl = document.activeElement;

      switch (evt.key) {
        case 'ArrowUp':
          if (self.romListContainer.style.display !== 'none') {
            evt.preventDefault();
            self.moveFocus(-1);
          }
          break;

        case 'ArrowDown':
          if (self.romListContainer.style.display !== 'none') {
            evt.preventDefault();
            self.moveFocus(1);
          }
          break;

        case 'SoftLeft': 
        case 'Escape': // Standard browser back behavior mapped to SoftLeft logic here
          if (self.romListContainer.style.display !== 'none') {
             self.searchInput.focus();
             // Prevent default back behavior if we just moved focus
             evt.preventDefault();
          } else {
             self.togglePause();
             evt.preventDefault();
          }
          break;

        case 'Enter':
          if (self.romListContainer.style.display !== 'none') {
            evt.preventDefault();
            // Action depends on what is focused
            if (activeEl === self.searchInput) {
                // If search is focused and Enter is pressed, move focus to list
                self.moveFocus(1); 
            } else if (activeEl.classList.contains('rom-item')) {
                // If a ROM item is focused, load it
                activeEl.click();
            }
          }
          break;

        case 'SoftRight':
           if (self.romListContainer.style.display !== 'none') {
            self.openFile();
           } else {
            self.showRomList(); 
           }
          evt.preventDefault();
          break;
      }
    });

    document.addEventListener('keyup', function(evt) {
        if (self.main.isRunning) {
            self.main.keyboard.keyup(evt);
        }
    });
  },

  updateSoftKeys: function(left, center, right) {
    this.softkeyLeft.textContent = left;
    this.softkeyCenter.textContent = center;
    this.softkeyRight.textContent = right;
  },

  setRoms: function(roms) {
    this.roms = roms;
    this.renderRomList(this.roms);
    this.showRomList();
  },

  renderRomList: function(romsToRender) {
    var self = this;
    this.romListElement.innerHTML = ''; // Clear existing list items

    for (var groupName in romsToRender) {
      if (romsToRender.hasOwnProperty(groupName)) {
        var groupHeader = document.createElement('li');
        groupHeader.className = 'rom-group-header';
        groupHeader.textContent = groupName;
        // Headers are not focusable (no tabindex)
        this.romListElement.appendChild(groupHeader);

        romsToRender[groupName].forEach(function(rom) {
          var listItem = document.createElement('li');
          listItem.textContent = rom.name;
          listItem.dataset.url = rom.url;
          listItem.className = 'rom-item';
          
          // CRITICAL FIX: Make items focusable via keyboard/d-pad
          listItem.setAttribute('tabindex', '0'); 

          // Handle "Enter" click logic directly on the element
          listItem.addEventListener('click', function() {
              self.loadROMFromURL(this.dataset.url);
          });

          // Optional: Auto-scroll when focused
          listItem.addEventListener('focus', function() {
              this.scrollIntoView({ behavior: 'smooth', block: 'center' });
          });

          self.romListElement.appendChild(listItem);
        });
      }
    }
  },

  filterRoms: function(searchTerm) {
    var lowerCaseSearchTerm = searchTerm.toLowerCase();
    var filteredRoms = {};

    if (!lowerCaseSearchTerm) {
        filteredRoms = this.roms;
    } else {
        for (var groupName in this.roms) {
            var matchingRoms = this.roms[groupName].filter(function(rom) {
                return rom.name.toLowerCase().includes(lowerCaseSearchTerm);
            });
            if (matchingRoms.length > 0) {
                filteredRoms[groupName] = matchingRoms;
            }
        }
    }
    this.renderRomList(filteredRoms);
  },

  showRomList: function() {
    this.main.stop();
    this.screenContainer.style.display = 'none';
    this.romListContainer.style.display = 'flex';
    
    // Focus search input on load
    this.searchInput.focus();
    
    this.updateSoftKeys('SHARE', 'SELECT', 'OPEN');
  },

  // Completely rewritten to use .focus()
  moveFocus: function(direction) {
    var active = document.activeElement;
    
    // Get all focusable ROM items
    var items = Array.from(this.romListElement.querySelectorAll('.rom-item'));
    
    // If list is empty, stay on search
    if (items.length === 0) {
        this.searchInput.focus();
        return;
    }

    var index = items.indexOf(active);

    if (active === this.searchInput) {
        if (direction > 0) {
            // Down from search -> First item
            items[0].focus();
        }
        // Up from search -> stays on search (or wrap to bottom if desired)
    } else if (index !== -1) {
        // Currently on a list item
        var newIndex = index + direction;

        if (newIndex < 0) {
            // Up from first item -> Go to Search
            this.searchInput.focus();
        } else if (newIndex >= items.length) {
            // Down from last item -> Loop to top or Search? Let's go to Search
            this.searchInput.focus();
        } else {
            // Move to next item
            items[newIndex].focus();
        }
    } else {
        // Focus was lost somewhere else, reset to search
        this.searchInput.focus();
    }
  },

  loadROMFromURL: function(url) {
    var self = this;
    this.updateStatus('Downloading...');
    this.romListContainer.style.display = 'none';
    this.screenContainer.style.display = 'block';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.overrideMimeType('text/plain; charset=x-user-defined');
    xhr.onload = function() {
      if (xhr.status === 200) {
        self.startEmulatorWithRom(xhr.responseText, url);
      } else {
        self.updateStatus('Error: ' + xhr.status);
        self.showRomList();
      }
    };
    xhr.onerror = function() {
        self.updateStatus('Download failed.');
        self.showRomList();
    };
    xhr.send();
  },

  loadROMFromFile: function(blob) {
      var self = this;
      var reader = new FileReader();
      reader.onload = function(e) {
          self.romListContainer.style.display = 'none';
          self.screenContainer.style.display = 'block';
          self.startEmulatorWithRom(e.target.result, blob.name);
      };
      reader.readAsBinaryString(blob);
  },

  startEmulatorWithRom: function(romData, romName) {
      this.main.readRomDirectly(romData, romName);
      this.main.reset();
      this.main.vdp.forceFullRedraw();
      this.main.start();
      this.updateStatus('');
      this.updateSoftKeys('PAUSE', '', 'LIST');
  },

  openFile: function() {
      var self = this;
      if (typeof MozActivity === 'undefined') {
          self.updateStatus('Web Activities not supported');
          return;
      }
      try {
          var activity = new MozActivity({
              name: 'pick',
              data: {
                  type: ['application/octet-stream', 'application/zip', '*/*'],
                  nocrop: true
              }
          });
          activity.onsuccess = function() {
              if (this.result.blob) {
                  self.loadROMFromFile(this.result.blob);
              }
          };
          activity.onerror = function() {
              self.updateStatus('File pick error: ' + this.error.name);
          };
      } catch (e) {
          self.updateStatus('Error opening file picker.');
      }
  },

  togglePause: function() {
    if (this.main.isRunning) {
      this.main.stop();
      this.updateStatus('PAUSED');
      this.updateSoftKeys('RESUME', '', 'LIST');
    } else {
      this.main.start();
      this.updateStatus('');
      this.updateSoftKeys('PAUSE', '', 'LIST');
    }
  },

  reset: function() {
    this.canvas.width = 256;
    this.canvas.height = 192;
    if (this.log) this.log.textContent = '';
  },

  updateStatus: function(s) {
    if(this.log) this.log.textContent = s;
  },

  writeAudio: function(buffer) {
    if (this.main.audioContext) {
        var source = this.main.audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(this.main.audioContext.destination);
        source.start();
    }
  },

  writeFrame: function() {
    this.canvasContext.putImageData(this.canvasImageData, 0, 0);
  },

  updateDisassembly: function() {},

  requestAnimationFrame: (function() {
    return window.requestAnimationFrame ||
           function(callback) { window.setTimeout(callback, 1000 / 60); };
  })().bind(window)
};
