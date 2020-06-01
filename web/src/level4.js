function level4(){
    function transformMap(_map) {

        return _map.map(x => x.split(""));
    }
    this.map = transformMap([
        "                        c",
        "                        c",
        "                        c",
        " D                      c",
        "    D                   c",
        "qq                      c",
        "    q  D            	 D",
        "  q       D        D    c",
        "q     qq    D    D    qqc",
        "q         q  D D   q  qq ",
        "qq          q    q       ",
        "qq           q q         ",
        "qq                       ",
        "qqwwwwwwwwwwwwwwwwwwwwwww",
        "qqwwwwwwwwwwwwwwwwwwwwwww",
        "qqwwwwwwwwwwwwwwwwwwwwwww"
    ]);

    this.x = () => 15;
    this.y = () => 15;
    this.vX = () => 3;
    this.vY = () => 3;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;
    
};