function level3(){
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
        "                   	 c",
        "                 D      c",
        " D                      c",
        "               qqqqqq   c",
        "               qqqqqq D c",
        "qqq       D            cc",
        "qqq                  qqq ",
        "     qqqqqqqq            ",
        "wwwwwqqqqqqqqqqqqqqqq    ",
        "wwwwwqqqqqqqqqqqqqqqqwwww"
    ]);
    
    this.x = () => 15;
    this.y = () => 15;
    this.vX = () => 3;
    this.vY = () => 3;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;
};