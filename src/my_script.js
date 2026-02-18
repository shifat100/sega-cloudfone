
function loadsmsrom(file) {

    var r = new FileReader();
    r.onload = function () {
        console.log(r.result);
        self.main.stop();
        self.main.readRomDirectly(data, 'x');
        self.main.reset();
        self.main.vdp.forceFullRedraw();
        self.enable();
    }
    r.readAsText(file);

}