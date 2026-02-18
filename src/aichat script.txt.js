if (navigator.getDeviceStorage) {
  /**
   * @constructor
   * @param {Object.<string, Object.<string, string>>} roms A list of rom files.
   */
  $.fn['JSSMSUI'] = function (roms) {
    var parent = /** HTMLElement **/ this;
    var UI = function (sms) {
      this.main = sms;
      var self = this;

      // Create the UI root container
      var root = $('<div></div>');
      var romContainer = $('<div id="romList"></div>');

      // Function to scan for .sms files
      this.scanForRoms = function () {
        const deviceStorage = navigator.getDeviceStorage('sdcard'); // Access storage
        const cursor = deviceStorage.enumerate(); // Enumerate files
        romContainer.empty(); // Clear previous content

        cursor.onsuccess = function () {
          if (!cursor.result) {
            return;
          }
          const file = cursor.result;

          // Check if the file has a .sms extension
          if (file.name.endsWith('.sms')) {
            const romItem = $('<div class="rom-item"></div>')
              .text(file.name)
              .click(function () {
                self.loadSMSFile(file);
              });
            romContainer.append(romItem); // Append file to list
          }
          cursor.continue(); // Continue to the next file
        };

        cursor.onerror = function () {                                    
          console.error('Error scanning device storage:', cursor.error);
          romContainer.html('<div class="error">Error scanning storage</div>');
        };
      };

      // Function to load the selected SMS file
      this.loadSMSFile = function (file) {
        const reader = new FileReader();

        reader.onload = function () {
          const data = reader.result;
          testromdata = data; // Assign to global variable for testing
          self.main.stop();
          self.main.readRomDirectly(data, file.name);
          self.main.reset();
          self.main.vdp.forceFullRedraw();
          self.main.start();
        };

        reader.onerror = function () {
          console.error('Error reading file:', reader.error);
          self.updateStatus('Failed to load ROM file.');
        };

        reader.readAsBinaryString(file); // Read the file as a binary string
      };

      // Append the ROM container to the UI root
      romContainer.appendTo(root);
      root.appendTo($(parent));

      // Automatically scan for ROMs when UI is created
      this.scanForRoms();
    };

    return UI;
  };
}
