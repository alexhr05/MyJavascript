function level1 (){
    function transformMap(_map) {

        return _map.map(x => x.split(""));
    }

    this.map = transformMap([
        "                        c",
        "                        c",
        "                        c",
        "                        c",
        "                        c",
        "                        c",
        "                      D c",
        "                 D     cc",
        "                      qqc",
        "               qqqqqq qq ",
        "     D         qqqqqq    ",
        "                         ",
        "qqqqqqqqqqqqqqqqqq       ",
        "qqqqqqqqqqqqqqqqqqwwwwwww",
        "qqqqqqqqqqqqqqqqqqwwwwwww",
        "qqqqqqqqqqqqqqqqqqwwwwwww"
    ]);

    this.x = () => 15;
    this.y = () => 15;
    this.vX = () => 3;
    this.vY = () => 3;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;
    
};