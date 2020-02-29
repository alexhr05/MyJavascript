
const level = new function () {
    function trasnformMap(_map) {

        return _map.map(x => x.split(""));
    }

    this.map = trasnformMap([
        "    D*      ****         ",
        "                         ",
        "                         ",
        "     *                D *",
        "     *                  *",
        "     *   D              *",
        "     *             	  ",
        "     *                   ",
        "     *                   ",
        "     *                   ",
        "     *           *       ",
        "qqqqqqqqqqqqqqqqqq       ",
        "qqqqqqqqqqqqqqqqqq       ",
        "******************       ",
        "*qqqqqqqqqqqqqqqqq       ",
        "*qqqqqqqqqqqqqqqqq      D"
    ]);
    //За да не могат да се променят
    this.x = () => 0;
    this.y = () => 0;
    this.vX = () => 3;
    this.vY = () => 3;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;

}();