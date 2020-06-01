function level2(){
    function transformMap(_map) {

        return _map.map(x => x.split(""));
    }

    this.map = transformMap([
        "                         ",
        "                         ",
        "  D                      ",
        "                         ",
        "  qq  D D                ",
        "  qq                 D   ",
        "     qq qq  D            ",
        "     qq qq    D D  D qq  ",
        "     qq    qq        qq  ",
        "           qq  qqqqq     ",
        "              qqq qq     ",
        "              q        qq",
        "                       qq",
        "wwwwwwwwwwwwwwwwwwwwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwww",
        "wwwwwwwwwwwwwwwwwwwwwwwww"
    ]);

    this.x = () => 15;
    this.y = () => 15;
    this.vX = () => 3;
    this.vY = () => 3;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;
    
};