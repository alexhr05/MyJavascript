const game = new function () {
	let level;

	// Текущо ниво
	let x;
	let y;

	let characterWalkingLeft = true;
	const characterWalkingRightImg = document.getElementById("characterWalkingRight");
	const diamondTransparentImg = document.getElementById("diamondTransparent");
	const characterWalkingLeftImg = document.getElementById("characterWalkingLeft");
	const platformImg = document.getElementById("platformImg");

	const canvas = document.getElementById("canvas-id");
	const ctx = canvas.getContext('2d');

	const symbols = Object.freeze({
		diamond: 'D',
		water: 'w',
		platform: 'q',
		win: 'c'
	});

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

	let backgroundFiles = [];
	let levelObjects = [];
	let stateLevelLoading = [];
	const maxLevel = 4;
	const minDataLevelLoaded = 2;

	let hasLoaded = false;

	function trasnformMap(_map) {

		return _map.map(x => x.split(""));
	}

	function loadLevel(numberOfLevel) {
		if (numberOfLevel > maxLevel) {
			return;
		}
		let img = new Image();
		img.onload = function () {
			backgroundFiles[numberOfLevel] = img;
			stateLevelLoading[numberOfLevel] = (stateLevelLoading[numberOfLevel] || 0) + 1;
		}
		img.src = 'img/Background' + numberOfLevel + '.png';
		document.getElementById('imageHolder').appendChild(img);

		let maps = document.createElement('script');
		maps.onload = function () {
			levelObjects[numberOfLevel] = eval("level" + numberOfLevel);
			stateLevelLoading[numberOfLevel] = (stateLevelLoading[numberOfLevel] || 0) + 1;
		}
		maps.src = 'src/level' + numberOfLevel + '.js';
		document.body.appendChild(maps);
	}

	function setLevelData(numberOfLevel) {
		if (numberOfLevel > maxLevel) {
			return;
		}
		//while (minDataLevelLoaded > (stateLevelLoading[numberOfLevel] || 0));
		function f() {
			if (minDataLevelLoaded > (stateLevelLoading[numberOfLevel] || 0)) {
				setTimeout(f, 200);
			} else {
				level = levelObjects[numberOfLevel];
				x = level.x();
				y = level.y();
				map = trasnformMap(level.map());
				hasLoaded = true;
				loadLevel(numberOfLevel + 1);

			}

		}
		f();

	}
	function drawFunction() {
		if (hasLoaded == false) {
			setTimeout(drawFunction, 300);
			return;
		}
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);

		ctx.drawImage(backgroundFiles[currentLevel], 0, 0, canvasWidth, canvasHeight);



		const oy = y;

		gravityY += gravitySpeed;
		game.handleMove(0, gravityY);
		if (Math.abs(y - oy) < 0.00001) {
			gravityY = StartGravity;
		}


		for (let c = 0; c < numberBlocksWidth; c++) {
			for (let r = 0; r < map.length; r++) {
				switch (map[r][leftBorder + c]) {
					case symbols.platform:
						ctx.drawImage(platformImg, c * blockSizeWidth, r * blockSizeHeight, blockSizeWidth, blockSizeHeight);
						break;
					case symbols.diamond:
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

	this.init = function () {
		loadLevel(currentLevel);
		setLevelData(currentLevel);
		requestAnimationFrame(drawFunction);
	};

	function moveToNextLevel() {
		currentLevel++;
		if (currentLevel > maxLevel) {
			window.location.href = "end_game.html";
		}
		setLevelData(currentLevel);
	}
	this.handleMove = function (scaleX /* Колко бързо се движи по x надясно и наляво*/, scaleY/* Колко бързо се движи по y надясно и наляво*/) {

		//Нова позиция
		const nx = Math.floor(x + level.vX() * scaleX);
		const ny = Math.floor(y + level.vY() * scaleY);
		const mapX = Math.round(nx / level.squareSizeX());
		const mapY = Math.floor(ny / level.squareSizeY());

		if (scaleX < 0) characterWalkingLeft = true;
		if (scaleX > 0) characterWalkingLeft = false;
		if (mapY >= map.length) {
			mapY = map.length - 1;
			ny = level.squareSizeY * mapY;
		}
		if (mapY < 0) {
			mapY = 0;
			ny = 0;
		}
		if (mapX >= map[mapY].length) {
			mapX = map.length - 1;
			nx = level.squareSizeX() * mapX - 4;
		}
		if (mapX < 0) {
			mapX = 0;
			nx = 0;
		}


		switch (map[mapY][mapX]) {
			case symbols.platform:
				//jumpCurrentStep = 1;
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
			case symbols.diamond:
				map[mapY][mapX] = ' ';
				CollectDiamonds++;
				break;
			case symbols.water:
				window.location.href = "fail.html";
				break;
			//символ за преминаване на следващо ниво
			case symbols.win:
				moveToNextLevel();
				break;
			default:
				x = nx;
				y = ny;
				break;
		}
		// Проверка дали ВЗИМА диамант




	};
	this.Jump = function () {
		/*if (jumpCurrentStep <= jumpMaxStep) {
			gravityY += jumpSizeStep;
			jumpCurrentStep++;
		}
		*/
		gravityY -= 50;
	}




}();

