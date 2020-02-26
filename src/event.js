const event = new function () {


	this.init = function () {
		console.log("neshto");
		document.addEventListener('keydown', KeyPressed);
		console.log("drugo");
	}
	function KeyPressed(keyCode) {
		console.log(keyCode.code);

		if (keyCode.code == "ArrowDown") {		// Стрелка надолу
			game.handleMove(0, 1);
		}
		if (keyCode.code == "ArrowUp") {
			game.handleMove(0, -1);
		}
		if (keyCode.code == "ArrowLeft") {
			game.handleMove(-1, 0);
		}
		if (keyCode.code == "ArrowRight") {
			game.handleMove(1, 0);
		}
	}



}();