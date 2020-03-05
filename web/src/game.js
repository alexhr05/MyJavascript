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
	const StartGravity=0.4;
	let gravityX = 0;
	let gravityY = StartGravity;

	const TextX_1 = canvas.clientWidth-200;
	const TextY_1 = 10;
	const TextY_redove = 20;
	
	let CollectDiamonds = 0;
	const gravitySpeed = 0.0005;
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


		const		oy = y;
		
		gravityY += gravitySpeed;
		game.handleMove(0, gravityY);
		if (Math.abs(y-oy)<0.00001){
			gravityY = StartGravity;
		} 
		
//		if () {
//			gravityY = 1;
//		}
//		console.log(" gravity= "+gravityY);

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
		//Тук се рисува човечето
		ctx.drawImage(characterWalkingLeft ?/*Когато е истина*/  characterWalkingLeftImg :/*Когато е лъжа*/  characterWalkingRightImg,
				(x * blockSizeWidth) / level.squareSizeX(), (y * blockSizeHeight) / level.squareSizeY()-blockSizeHeight, blockSizeWidth, blockSizeHeight);
	
		
		ctx.font = "20px Verdana";
		ctx.fillStyle = "white";
		ctx.fillText("Резултат :", 	TextX_1, TextY_1 + TextY_redove*2); 
		ctx.fillText("Ниво :", 	TextX_1, TextY_1 + TextY_redove*3); 
		// Печата резултат:
		ctx.fillText(CollectDiamonds, 	TextX_1+115, TextY_1 + TextY_redove*2); 
		// Печата ниво
		ctx.fillText(level.currentLevel,TextX_1+115, TextY_1 + TextY_redove*3); 

		requestAnimationFrame(drawFunction);
			
	};

	this.init = function (_level) {
		level = _level;
		//Записва й се стойноста
		console.log(level);
		x = level.x();
		y = level.y();

//		setInterval(drawFunction, 200);
		requestAnimationFrame(drawFunction);

	};

	this.handleMove = function (scaleX /* Колко бързо се движи по x надясно и наляво*/, scaleY/* Колко бързо се движи по y надясно и наляво*/) {

		//Нова позиция
		const nx = Math.floor(x + level.vX() * scaleX);
		const ny = Math.floor(y + level.vY() * scaleY);
		const mapX = Math.round(nx / level.squareSizeX());
		const mapY = Math.round(ny / level.squareSizeY());
//		const mapX = nx / level.squareSizeX();
//		const mapY = ny / level.squareSizeY();

		if (scaleX < 0) characterWalkingLeft = true;
		if (scaleX > 0) characterWalkingLeft = false;

		const map = level.map;
	
//		console.log(" y="+y + " mapY= " +mapY+ " ny= " + ny);
//		console.log(y + " y> " + mapY);
//		console.log(map);
//		console.log(map[mapY]);

		if (mapX >= 0 && mapY >= 0 && mapY < map.length && mapX < map[mapY].length) {

			switch (map[mapY][mapX]) {
				case '*':
				case 'q':
					gravityY = StartGravity;
					if (x < nx) {
						x = level.squareSizeX() * (mapX-1);
					} else if (x > nx) {
						x = level.squareSizeX() * (mapX+1);
					}


					if (y < ny) {	// Движим се надолу и удряме преграда
//						y = level.squareSizeY() * (mapY - 1);
					} else if (y > ny) {
//						y = level.squareSizeY() * (mapY + 1);
					}
					break;
				case 'D':
					map[mapY][mapX] = ' ';
					CollectDiamonds++;

				default:
					x = nx;
					y = ny;
					break;
			}
			// Проверка дали ВЗИМА диамант


		}

	};

}();

