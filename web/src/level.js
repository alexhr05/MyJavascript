
const level = new function () {
    function trasnformMap(_map) {

        return _map.map(x => x.split(""));
    }

    this.map = trasnformMap([
        "    D                    ",
        "                         ",
        "                         ",
        "                      D  ",
        "                         ",
        "         D               ",
        "                   	  ",
        "                         ",
        "                         ",
        "               qqqqqq    ",
        "               qqqqqq    ",
        "                         ",
        "qqqqqqqqqqqqqqqqqq       ",
        "qqqqqqqqqqqqqqqqqqqqq    ",
        "qqqqqqqqqqqqqqqqqqqqqqqq ",
        "qqqqqqqqqqqqqqqqqqqqqqqqq"
    ]);
    //За да не могат да се променят
    this.x = () => 15;
    this.y = () => 15;
    this.vX = () => 3;
    this.vY = () => 3;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;

}();