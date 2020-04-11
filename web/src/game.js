const game = new function () {
	let level;

	var currentLevel = 1;		// Текущо ниво
	/*	const moveX = 1;
		const moveY = 1;
		const stopX = 0;
		const stopY = 0;
		let x
		const START = {
			x: 3,
			y: 3,
		};
		this.myX = START.x;
		this.myY = START.y;
		this.MYmoveX = stopX;
		this.MYmoveY = stopY;
	*/
	let x;
	let y;
	let iAmSpeed = false;
	let speedState = false;
	let characterWalkingLeft = true;

	const characterWalkingRightImg = document.getElementById("characterWalkingRight");
	const brickImg = document.getElementById("brick");
	const diamondTransparentImg = document.getElementById("diamondTransparent");
	const characterWalkingLeftImg = document.getElementById("characterWalkingLeft");
	const backgroundLevel1Img = document.getElementById("backgroundLevel1");
	const backgroundLevel2Img = document.getElementById("backgroundLevel2");
	const backgroundLevel3Img = document.getElementById("backgroundLevel3");
	const backgroundLevel4Img = document.getElementById("backgroundLevel4");
	const backgroundLevel5Img = document.getElementById("backgroundLevel5")
	const canvas = document.getElementById("canvas-id");
	const ctx = canvas.getContext('2d');

	const canvasWidth = canvas.clientWidth;
	const canvasHeight = canvas.clientHeight;
	const blockSizeWidth = 50;
	const blockSizeHeight = 50;
	const StartGravity = 0.4;
	let gravityX = 0;
	let gravityY = StartGravity;

	const labelPositionX = canvas.clientWidth - 200;
	const labelPositionY = 10;
	const labelRowY = 20;

	let CollectDiamonds = 0;
	const gravitySpeed = 0.0005;
	const numberBlocksWidth = canvasWidth / blockSizeWidth;
	const blockLeftFromCharacter = numberBlocksWidth / 3;
	let leftBorder = 0;

	var map;

	function drawFunction() {
		//		console.log( "current level: " + currentLevel);
		//За бързина     
		/*		speedState = !speedState;
		
				if (!iAmSpeed && !speedState) {
					return;
				}
		*/
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		if (currentLevel == 1) {
			ctx.drawImage(backgroundLevel1Img, 0, 0, canvasWidth, canvasHeight);
			//			console.log( " level 1 ");
			map = level.map1;
		}
		if (currentLevel == 2) {
			ctx.drawImage(backgroundLevel2Img, 0, 0, canvasWidth, canvasHeight);
			console.log(" level 2 ");
			map = level.map2;
		}
		if (currentLevel == 3) {
			ctx.drawImage(backgroundLevel3Img, 0, 0, canvasWidth, canvasHeight);
			console.log(" level 3 ");
			map = level.map3;
		}
		if (currentLevel == 4) {
			ctx.drawImage(backgroundLevel4Img, 0, 0, canvasWidth, canvasHeight);
			console.log(" level 4 ");
			map = level.map4;
		}
		if (currentLevel == 5) {
			ctx.drawImage(backgroundLevel5Img, 0, 0, canvasWidth, canvasHeight);
			console.log(" level 5 ");
			map = level.map5;
		}

		const oy = y;

		gravityY += gravitySpeed;
		game.handleMove(0, gravityY);
		if (Math.abs(y - oy) < 0.00001) {
			gravityY = StartGravity;
		}

		//		if () {
		//			gravityY = 1;
		//		}
		//		console.log(" gravity= "+gravityY);

		for (let c = 0; c < numberBlocksWidth; c++) {
			for (let r = 0; r < level.map1.length; r++) {
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
		console.log("init function");
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
		//		const mapX = nx / level.squareSizeX();
		//		const mapY = ny / level.squareSizeY();

		if (scaleX < 0) characterWalkingLeft = true;
		if (scaleX > 0) characterWalkingLeft = false;

		//var map = level.map1;
		if (currentLevel == 1) {
			map = level.map1;
		}
		if (currentLevel == 2) {
			map = level.map2;
		}
		if (currentLevel == 3) {
			map = level.map3;
		}
		if (currentLevel == 4) {
			map = level.map4;
		}
		if (currentLevel == 5) {
			map = level.map5;
		}
		//		console.log(x + " x> " + mapX);
		//		console.log(y + " y> " + mapY);
		//		console.log(map);
		//		console.log(map[mapY]);

		//		console.log( " mapX= " +mapX);

		if (mapX >= 24) {
			if (currentLevel < 5) {
				currentLevel++;

				// Нови позиции
				x = level.x();
				y = level.y();

				console.log(" PREMINAHTE novo NIVO..... ");
				requestAnimationFrame(drawFunction);
			} else {
				// друга страница с надпис
				window.location.href = "end_game.html";
			}
		} else if (mapX >= 0 && mapY >= 0 && mapY < map.length && mapX < map[mapY].length) {

			switch (map[mapY][mapX]) {
				case '*':
				case 'q':
					gravityY = StartGravity;
					if (x < nx) {
						x = level.squareSizeX() * (mapX - 1);
					} else if (x > nx) {
						x = level.squareSizeX() * (mapX + 1);
					}

					if (y < ny) {
						//						y = level.squareSizeY() * (mapY - 1);
					} else if (y > ny) {
						//						y = level.squareSizeY() * (mapY + 1);
					}
					break;
				case 'D':
					map[mapY][mapX] = ' ';
					CollectDiamonds++;
					break;
				case 'w':
					window.location.href = "fail.html";

				default:
					x = nx;
					y = ny;
					break;
			}
			// Проверка дали ВЗИМА диамант


		}

	};

}();

