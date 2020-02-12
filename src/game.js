const game = new function () {
	let level;
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
	const canvas = document.getElementById("canvas-id");
	const ctx = canvas.getContext('2d');

	const canvasWidth = canvas.clientWidth;
	const canvasHeight = canvas.clientHeight;
	const blockSizeWidth = 50;
	const blockSizeHeight = 50;
	const gravityX=0;
	const gravityY=1;
	const numberBlocksWidth = canvasWidth / blockSizeWidth;
	const blockLeftFromCharacter = numberBlocksWidth / 3;
	let leftBorder = 0;

	function drawFunction() {
		//За бързина     
		/*		speedState = !speedState;
		
				if (!iAmSpeed && !speedState) {
					return;
				}
		*/
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		ctx.drawImage(backgroundLevel1Img, 0, 0, canvasWidth, canvasHeight);


	
		game.handleMove(gravityX, gravityY);
		const map = level.map;
		for (let c = 0; c < numberBlocksWidth; c++) {
			for (let r = 0; r < level.map.length; r++) {
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
		ctx.drawImage(characterWalkingLeft ?/*Когато е истина*/  characterWalkingLeftImg :/*Когато е лъжа*/  characterWalkingRightImg,
			(x * blockSizeWidth) / level.squareSizeX(), (y * blockSizeHeight) / level.squareSizeY(), blockSizeWidth, blockSizeHeight);
	};

	this.init = function (_level) {
		level = _level;
		//Записва й се стойноста
		console.log(level);
		x = level.x();
		y = level.y();

		setInterval(drawFunction, 100);

	};

	this.handleMove = function (scaleX /* Колко бързо се движи по x надясно и наляво*/, scaleY/* Колко бързо се движи по y надясно и наляво*/) {
		
		//Нова позиция
		const nx = x + level.vX() * scaleX;
		const ny = y + level.vY() * scaleY;
		const mapX = Math.round(nx / level.squareSizeX());
		const mapY = Math.round(ny / level.squareSizeY());
		
		if (scaleX < 0) characterWalkingLeft = true;
		if (scaleX > 0) characterWalkingLeft = false;

		const map = level.map;

		console.log(x + " -> " + mapX);
		console.log(y + " -> " + mapY);
		/*console.log(map);
		console.log(map[mapY]);
*/		if (mapX >= 0 && mapY >= 0 && mapY < map.length && mapX < map[mapY].length && map[mapY][mapX] != '*' && map[mapY][mapX] != 'q') {
			x = nx;
			y = ny;
			// Проверка дали ВЗИМА диамант
			if (map[mapY][mapX] == 'D') {
				// Изтрива Диаманта

				map[mapY][mapX] = ' ';

				CollectDiamonds++;

			}


		}






	};


}();

