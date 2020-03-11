
const level = new function () {
    function trasnformMap(_map) {

        return _map.map(x => x.split(""));
    }
	console.log(" currentLevel= "+this.currentLevel);
	
		this.map1 = trasnformMap([
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"         D               ",
			"                   	  ",
			"                         ",
			"                       D ",
			"               qqqqqq    ",
			"     D         qqqqqq    ",
			"                         ",
			"qqqqqqqqqqqqqqqqqq       ",
			"qqqqqqqqqqqqqqqqqqqqq    ",
			"qqqqqqqqqqqqqqqqqqqqqqqq ",
			"qqqqqqqqqqqqqqqqqqqqqqqqq"
		]);
		this.map2 = trasnformMap([
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                         ",
			"                 D       ",
			"                   	  ",
			"                         ",
			" D                       ",
			"                         ",
			"                         ",
			"                         ",
			"                      D  ",
			"                         ",
			"qqqqqqqqqqqqqqqqqqqqqqqqq",
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