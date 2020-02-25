const event = new function () {
	this.init = function () {
		document.addEventListener('keydown', KeyPressed);
	}
	function KeyPressed(keyCode) {
		console.log(keyCode.code);

		if (keyCode.code == "ArrowDown") {
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