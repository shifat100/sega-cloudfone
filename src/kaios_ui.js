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

/**
 * KaiOS-specific UI implementation.
 * @constructor
 * @param {JSSMS} sms
 */
JSSMS.KaiOSUI = function(sms) {
  this.main = sms;
  this.roms = {};
  this.currentRomIndex = -1;
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
    this.screenContainer.appendChild(this.log); // Log is part of the game screen

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

    document.addEventListener('keydown', function(evt) {
      if (self.main.isRunning) {
          self.main.keyboard.keydown(evt);
      }

      switch (evt.key) {
        case 'ArrowUp':
          if (self.romListContainer.style.display !== 'none') {
            self.navigateRomList(-1);
            evt.preventDefault();
          }
          break;
        case 'ArrowDown':
          if (self.romListContainer.style.display !== 'none') {
            self.navigateRomList(1);
            evt.preventDefault();
          }
          break;
        case 'SoftLeft':
          if (self.romListContainer.style.display !== 'none') {
             self.shareApp();
          } else {
             self.togglePause();
          }
          evt.preventDefault();
          break;
        case 'Enter':
          if (document.activeElement === self.searchInput) {
              // If search is focused, Enter should select the highlighted ROM
              self.loadSelectedROM();
          } else if (self.romListContainer.style.display !== 'none') {
            self.loadSelectedROM();
          }
          evt.preventDefault();
          break;
        case 'SoftRight':
           if (self.romListContainer.style.display !== 'none') {
            self.openFile();
           } else {
            self.showRomList(); // Option to go back to list from game
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

    var romCounter = 0;
    for (var groupName in romsToRender) {
      if (romsToRender.hasOwnProperty(groupName)) {
        var groupHeader = document.createElement('li');
        groupHeader.className = 'rom-group-header';
        groupHeader.textContent = groupName;
        this.romListElement.appendChild(groupHeader);

        romsToRender[groupName].forEach(function(rom) {
          var listItem = document.createElement('li');
          listItem.textContent = rom.name;
          listItem.dataset.url = rom.url;
          listItem.dataset.index = romCounter++;
          listItem.className = 'rom-item';
          self.romListElement.appendChild(listItem);
        });
      }
    }
    this.currentRomIndex = 0;
    this.highlightSelectedRom();
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
    this.searchInput.focus();
    if (this.currentRomIndex === -1) this.currentRomIndex = 0;
    this.highlightSelectedRom();
    this.updateSoftKeys('SHARE', 'SELECT', 'OPEN');
  },

  navigateRomList: function(direction) {
    var romItems = this.romListElement.querySelectorAll('.rom-item');
    if (romItems.length === 0) return;

    var currentItem = romItems[this.currentRomIndex];
    if (currentItem) {
        currentItem.classList.remove('selected');
    }

    this.currentRomIndex += direction;
    if (this.currentRomIndex < 0) this.currentRomIndex = romItems.length - 1;
    if (this.currentRomIndex >= romItems.length) this.currentRomIndex = 0;

    this.highlightSelectedRom();
  },

  highlightSelectedRom: function() {
    var romItems = this.romListElement.querySelectorAll('.rom-item');
    if (romItems.length > 0 && romItems[this.currentRomIndex]) {
      var selectedItem = romItems[this.currentRomIndex];
      selectedItem.classList.add('selected');
      selectedItem.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' });
    }
  },

  loadSelectedROM: function() {
    var romItems = this.romListElement.querySelectorAll('.rom-item');
    if (this.currentRomIndex === -1 || !romItems[this.currentRomIndex]) return;
    var romUrl = romItems[this.currentRomIndex].dataset.url;
    this.loadROMFromURL(romUrl);
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

  shareApp: function() {
      if (typeof MozActivity === 'undefined') {
          this.updateStatus('Share not supported');
          return;
      }
      try {
          new MozActivity({
              name: 'share',
              data: {
                  type: 'url',
                  url: window.location.href,
                  title: 'jsSMS Emulator',
                  text: 'Sega Master System/Game Gear emulator for KaiOS!'
              }
          });
      } catch (e) {
          this.updateStatus('Error opening share.');
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