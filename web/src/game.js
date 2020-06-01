const game = new function () {
	let level;

	// Текущо ниво
	let x;
	let y;

	let characterWalkingLeft = true;
	const characterWalkingRightImg = document.getElementById("characterWalkingRight");
	const diamondTransparentImg = document.getElementById("diamondTransparent");
	const characterWalkingLeftImg = document.getElementById("characterWalkingLeft");

	const canvas = document.getElementById("canvas-id");
	const ctx = canvas.getContext('2d');

	const canvasWidth = canvas.clientWidth;
	const canvasHeight = canvas.clientHeight;
	const blockSizeWidth = 50;
	const blockSizeHeight = 50;
	const StartGravity = 0.4;
	let gravityY = StartGravity;

	const labelPositionX = canvas.clientWidth - 200;
	const labelPositionY = 10;
	const labelRowY = 20;

	let CollectDiamonds = 0;
	const gravitySpeed = 0.0005;
	const numberBlocksWidth = canvasWidth / blockSizeWidth;

	const jumpSizeStep = -2;
	let jumpCurrentStep = 1;
	const jumpMaxStep = 5;

	let leftBorder = 0;

	let map;

	let currentLevel = 1;

	var backgroundFiles = [];
	var levelFiles = [];

	function levels() {

		var img = new Image();
		img.onload = function () {
			backgroundFiles.push(img);
		}
		img.src = 'img/Background' + currentLevel + '.png';
		document.body.appendChild(img);


		var maps = document.createElement('maps');
		maps.onload = function () {
			levelFiles.push(maps);
		}
		maps.src = 'level' + currentLevel + '.js';
		document.body.appendChild(maps);


	}
	function drawFunction() {

		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		window.onload = function () {
			ctx.drawImage(backgroundFiles[currentLevel - 1], 0, 0, canvasWidth, canvasHeight);
		}
		map = levelFiles[currentLevel - 1];

		const oy = y;

		gravityY += gravitySpeed;
		game.handleMove(0, gravityY);
		if (Math.abs(y - oy) < 0.00001) {
			gravityY = StartGravity;
		}


		for (let c = 0; c < numberBlocksWidth; c++) {
			for (let r = 0; r < map.length; r++) {
				switch (map[r][leftBorder + c]) {
					case '*':
						ctx.drawImage(brick, c * blockSizeWidth, r * blockSizeHeight, blockSizeWidth, blockSizeHeight);
						break;
					case 'D':
						ctx.drawImage(diamondTransparentImg, c * blockSizeWidth, r * blockSizeHeight, blockSizeWidth, blockSizeHeight);
						break;
				}
			}
		}
		//Тук се рисува човечето
		ctx.drawImage(characterWalkingLeft ?/*Когато е истина*/  characterWalkingLeftImg :/*Когато е лъжа*/  characterWalkingRightImg,
			(x * blockSizeWidth) / level.squareSizeX(), (y * blockSizeHeight) / level.squareSizeY() - blockSizeHeight, blockSizeWidth, blockSizeHeight);


		ctx.font = "20px Verdana";
		ctx.fillStyle = "white";
		ctx.fillText("Резултат :", labelPositionX, labelPositionY + labelRowY * 2);
		ctx.fillText("Ниво :", labelPositionX, labelPositionY + labelRowY * 3);
		// Печата резултат:
		ctx.fillText(CollectDiamonds, labelPositionX + 115, labelPositionY + labelRowY * 2);
		// Печата ниво
		ctx.fillText(currentLevel, labelPositionX + 115, labelPositionY + labelRowY * 3);

		setInterval(this.handleKeys, 250);
		requestAnimationFrame(drawFunction);

	};

	this.init = function (_level) {
		level = _level;
		//Записва й се стойноста
		console.log(level);
		x = level.x();
		y = level.y();

		requestAnimationFrame(drawFunction);

	};

	this.handleMove = function (scaleX /* Колко бързо се движи по x надясно и наляво*/, scaleY/* Колко бързо се движи по y надясно и наляво*/) {

		//Нова позиция
		const nx = Math.floor(x + level.vX() * scaleX);
		const ny = Math.floor(y + level.vY() * scaleY);
		const mapX = Math.round(nx / level.squareSizeX());
		const mapY = Math.floor(ny / level.squareSizeY());

		if (scaleX < 0) characterWalkingLeft = true;
		if (scaleX > 0) characterWalkingLeft = false;

		if (mapX >= 24) {
			if (currentLevel < 5) {
				// Нови позиции
				x = level.x();
				y = level.y();

				requestAnimationFrame(drawFunction);
			} else {
				// друга страница с надпис
				window.location.href = "end_game.html";
			}
		} else if (mapX >= 0 && mapY >= 0 && mapY < map.length && mapX < map[mapY].length) {

			switch (map[mapY][mapX]) {
				case 'q':
					jumpCurrentStep = 1;
					gravityY = StartGravity;
					if (x < nx) {
						x = level.squareSizeX() * (mapX - 1);
					} else if (x > nx) {
						x = level.squareSizeX() * (mapX + 1);
					}

					if (y < ny) {
					} else if (y > ny) {
					}
					break;
				case 'D':
					map[mapY][mapX] = ' ';
					CollectDiamonds++;
					break;
				case 'w':
					window.location.href = "fail.html";
					break;
				//символ за преминаване на следващо ниво
				case 'c':
					currentLevel++;
					levels();
					break;
				default:
					x = nx;
					y = ny;
					break;
			}
			// Проверка дали ВЗИМА диамант


		}

	};
	this.Jump = function () {
		if (jumpCurrentStep <= jumpMaxStep) {
			gravityY += jumpSizeStep;
			jumpCurrentStep++;
		}
	}



}();

