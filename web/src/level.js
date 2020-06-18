
const level = new function () {
    function trasnformMap(_map) {

        return _map.map(x => x.split(""));
    }
	
		this.map1 = trasnformMap([
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                      D  ",
			"                 D       ",
			"                      qq ",
			"               qqqqqq qq ",
			"     D         qqqqqq    ",
			"                         ",
			"qqqqqqqqqqqqqqqqqq       ",
			"qqqqqqqqqqqqqqqqqqwwwwwww",
			"qqqqqqqqqqqqqqqqqqwwwwwww",
			"qqqqqqqqqqqqqqqqqqwwwwwww"
		]);
		this.map2 = trasnformMap([
			"                         ",
			"                         ",
			"  D                      ",
			"                         ",
			"  qq  D D                ",
			"  qq                 D   ",
			"     qq qq  D            ",
			"     qq qq    D   D  qq  ",
			"     qq    qq        qq  ",
			"           qq  qqqqq     ",
			"              qqq qq     ",
			"              q        qq",
			"                       qq",
			"wwwwwwwwwwwwwwwwwwwwwwwww",
			"wwwwwwwwwwwwwwwwwwwwwwwww",
			"wwwwwwwwwwwwwwwwwwwwwwwww"
		]);
		this.map3 = trasnformMap([
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                   	  ",
			"                 D       ",
			" D                       ",
			"               qqqqqq    ",
			"               qqqqqq D  ",
			"qqq       D              ",
			"qqq                  qqq ",
			"     qqqqqqqq            ",
			"wwwwwqqqqqqqqqqqqqqqq    ",
			"wwwwwqqqqqqqqqqqqqqqqwwww"
		]);
		this.map4 = trasnformMap([
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                   	  ",
			"                         ",
			"q                        ",
			"q                        ",
			"q                        ",
			"qq                       ",
			"qq                       ",
			"qqq                      ",
			"qqq                      ",
			"qqqq                     "
		]);
		this.map5 = trasnformMap([
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                   	  ",
			"                 D       ",
			" D                       ",
			"               qqqqqq    ",
			"               qqqqqq D  ",
			"qqq       D              ",
			"qqq                  qqq ",
			"     qqqqqqqq            ",
			"wwwwwqqqqqqqqqqqqqqqq    ",
			"wwwwwqqqqqqqqqqqqqqqqwwww"
		]);
    //За да не могат да се променят
    this.x = () => 15;
    this.y = () => 15;
    this.vX = () => 3;
    this.vY = () => 3;
    this.squareSizeX = () => 10;
    this.squareSizeY = () => 10;

}();
