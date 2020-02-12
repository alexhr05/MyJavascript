
const level = new function () {
    function trasnformMap(_map) {

        return _map.map(x => x.split(""));
    }

    this.map = trasnformMap([
        "                      D  ",
        "                         ",
        "         D               ",
        "                   	  ",
        "                         ",
        "                         ",
        "                         ",
        "                 *       ",
        "    D       ****         ",
        "                         ",
        "                         ",
        "qqqqqqqqqqqqqqqqqqq      ",
        "qqqqqqqqqqqqqqqqqqq      ",
        "qqqqqqqqqqqqqqqqqqq      ",
        "qqqqqqqqqqqqqqqqqqq      ",
        "qqqqqqqqqqqqqqqqqqq     D"
    ]);
    //За да не могат да се променят
    this.x = () => 1;
    this.y = () => 1;
    this.vX = () => 3;
    this.vY = () => 3;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;

}();