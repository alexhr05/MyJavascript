
const level = new function () {
    function trasnformMap(_map) {
        return _map.map(x => x.split(""));
    }
    
    this.map = trasnformMap([
        "*******************",
        "*                 *",
        "*         *       *",
        "*    D    *        ",
        "*         *        ",
        "*         *        ",
        "*                  ",
        "*      D           ",
        "*                  ",
        "*                  ",
        "***               *",
        "*          D      *",
        "*              ****",
        "*******************"
    ]);
    this.x = 1;
    this.y = 1;
    this.vX = 3;
    this.vY = 3;
    
    












}();