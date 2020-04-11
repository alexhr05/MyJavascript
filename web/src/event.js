const event = new function () {

	let keylog = [];

	this.init = function () {
		document.addEventListener('keydown', KeyDown);
		document.addEventListener('keyup',   KeyUp);
		setInterval(handleKeys,20);
	}
	function KeyUp(eventKeyUp) {
		
		
		for (var i = 0; i < keylog.length; i++) {
			if (keylog[i] == eventKeyUp.code)
  				keylog.splice(i);
        }
	}
	function KeyDown(eventKeyDown) {
		
		if (keylog.indexOf(eventKeyDown.code) == -1)
			keylog.push(eventKeyDown.code);
	}

	function handleKey(keyCode) {
			if (keyCode == "ArrowDown") {		// Стрелка надолу
				game.handleMove(0, 1);
			}
			if (keyCode == "ArrowUp") {
				game.handleMove(0, -3);
			}
			if (keyCode == "ArrowLeft") {
				game.handleMove(-1, 0);
			}
			if (keyCode == "ArrowRight") {
				game.handleMove(1, 0);
			}
	}
	function handleKeys() {

		for (var i = 0; i < keylog.length; i++) {
			handleKey (keylog[i]);
		}
	}

}();
	
