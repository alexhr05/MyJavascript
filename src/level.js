
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
        "                 *       ",
        "qqqqqqqqqqqqqqqqqq       ",
        "qqqqqqqqqqqqqqqqqq       ",
        "******************       ",
        "*qqqqqqqqqqqqqqqqq       ",
        "*qqqqqqqqqqqqqqqqq      D"
    ]);
    //За да не могат да се променят
    this.refreshRate = () => 100;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;
}();