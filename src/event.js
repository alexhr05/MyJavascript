const event = new function () {
	document.addEventListener('keydown', game.KeyPressed);
	document.addEventListener('keyup', game.KeyUp);

	this.init = function () {

	}
	function KeyUp(keyCode) {
		window.console.log(keyCode.code);

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

	function KeyPressed(keyCode) {

	}

}	
	

}();