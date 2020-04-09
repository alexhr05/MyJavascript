const event = new function () {

	let keylog = [];

	this.init = function () {
		console.log("neshto");
		document.addEventListener('keydown', KeyDown);
		document.addEventListener('keyup', KeyUp);
		console.log("drugo");

	}
	function KeyUp(eventKeyUp) {
		console.log("....key+UP++" + eventKeyUp.code);

		for (var i = 0; i < keylog.length; i++) {
			if (keylog[i] == eventKeyUp.code)
				keylog.splice(i);
		}

		for (var i = 0; i < keylog.length; i++) {
			console.log("=NE natisnat, ot masiv ===i=" + i + "; keylog[i]=" + keylog[i]);
		}
		console.log(keylog.length);

	}
	function KeyDown(eventKeyDown) {
		console.log("++++++++++++++" + eventKeyDown.code);
		this.gravityY = 1;		// Гравитацията се задейства при всеки бутон

		if (keylog.indexOf(eventKeyDown.code) == -1)
			keylog.push(eventKeyDown.code);


		for (var i = 0; i < keylog.length; i++) {
			console.log("=DOWN, ot masiv ===i=" + i + "; keylog[i]=" + keylog[i]);
		}

	}

	function handleKey(keyCode) {
		if (keyCode == "ArrowDown") {		// Стрелка надолу
			game.handleMove(0, 1);
		}
		if (keyCode == "ArrowUp") {
			game.handleMove(0, -1);
		}
		if (keyCode == "ArrowLeft") {
			game.handleMove(-1, 0);
		}
		if (keyCode == "ArrowRight") {
			game.handleMove(1, 0);
		}
	}
	function handleKeys() {
		console.log("Vliza v HandleKeys");

		for (var i = 0; i < keylog.length; i++) {
			handleKey(keylog[i]);
		}
	}
	setInterval(handleKeys, 20);
}();
