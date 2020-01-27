const game = new function () {
    let level;
	const moveX = 1;
	const moveY = 1;
	const stopX = 0;
	const stopY = 0;
	const START = {
            x: 3,
            y: 3,
	};
	let myX = START.x, myY = START.y, MYmoveX=stopX, MYmoveY=stopY;

    let iAmSpeed = false;
    let speedState = false;


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
    const numberBlocksWidth = canvasWidth / blockSizeWidth;
    const blockLeftFromCharacter = numberBlocksWidth / 3;
    let leftBorder = 0;



    function drawFunction() {
        //За бързина     
        speedState = !speedState;

        if (!iAmSpeed && !speedState) {
            return;
        }
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);


        ctx.drawImage(backgroundLevel1Img, 0, 0, canvasWidth, canvasHeight);

        const map = level.map;
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





    };

    this.init = function (_level) {
        level = _level;
        x = level.x;
        y = level.y;





    };
	
	
	game.checkMove ();
	
	setInterval(drawFunction, 100);
	
}();

const checkMove = new function (){
	document.addEventListener('keydown', game.KeyPressed);
	document.addEventListener('keyup', game.KeyUp);


	// Проверка дали ВЗИМА диамант
	if(map[myY][myX] == 'D') {
		CollectDiamonds++;
		// Изтрива Диаманта
		let res = map[myY].replace("D", " ");
		map[myY] = res;
	}			



	for(let r=0; r<map.length; r++){
		for(let c=0; c<map[r].length; c++){
			if(map[r][c]=='*'){
				ctx.drawImage (brickwall,c*blockSize.width,r*blockSize.height,blockSize.width,blockSize.height);
			} else if(map[r][c]=='D'){
				ctx.drawImage (diamond,c*blockSize.width,r*blockSize.height,blockSize.width,blockSize.height);
			}
		}
	}
	
	// Проверка дали е ВЪТРЕ В екрана
	if ( MYmoveY > 0 ) {		// Проверка дали се движи надолу
		if ( myY < (map.length-2) ) {		// Проверка дали е в екрана, дали не напуска екрана
			if(map[myY+1][myX]!='*' && map[myY+1][myX]!='q' ) {
				// Движение НАДОЛУ
				myY=myY+MYmoveY;
			} else {
			}
		} else
			console.log("Izvun ekran nadolu");
	}
	if ( MYmoveY < 0 ) {
		if ( myY >= 1 ) {
			if(map[myY-1][myX]!='*' && map[myY-1][myX]!='q' ) {
				// Движение НАГОРЕ
				myY=myY+MYmoveY;
			} else {
			}
		} else
			console.log("Izvun ekran nagore");
	}
	if ( MYmoveX > 0 ) {
		if ( myX < (map[0].length-1) ) {
			if(map[myY][myX+1]!='*' && map[myY][myX+1]!='q' ) {
				// Движение НАДЯСНО
				myX=myX+MYmoveX;
			} else {
			}
		} else
			console.log("Izvun ekran nadiasno");
	}
	if ( MYmoveX < 0 ) {
		if ( myX >= 1 ) {
			if(map[myY][myX-1]!='*' && map[myY][myX-1]!='q' ) {
				// Движение НАЛЯВО
				myX=myX+MYmoveX;
			} else {
			}
		} else
			console.log("Izvun ekran naliavo");
	}
}();

const KeyUp = new function (keyCode){
	window.console.log(keyCode.code);

	if (keyCode.code == "ArrowDown") {		// Стрелка надолу
		MYmoveY= stopY;
		MYmoveX= stopX;
		
	}	
	if (keyCode.code == "ArrowUp") {
		MYmoveY= stopX;
		MYmoveX= stopY;
		
	}	
	if (keyCode.code == "ArrowLeft") {
		MYmoveX = stopX;
		MYmoveY = stopY;
		
	}	
	if (keyCode.code == "ArrowRight") {
		MYmoveX = stopX;
		MYmoveY = stopY;
	}	
}();

const KeyPressed = new function (keyCode){
//	window.console.log("natisnat e buton 8888");
	window.console.log(keyCode.code);

	// Проверява за стрелка надолу
	if (keyCode.code == "ArrowDown") {		// Стрелка надолу
//		console.log("Strelka Nadolu") 
		MYmoveY=moveY;
		MYmoveX=stopX;
		
	}	
	if (keyCode.code == "ArrowUp") {
//		console.log("Strelka NAGORE") 
		MYmoveY=-moveY;
		MYmoveX=stopX;
		
	}	
	if (keyCode.code == "ArrowLeft") {
//		console.log("Strelka NALIAVO") 
		MYmoveX = -moveX;
		MYmoveY =  stopY;
		
	}	
	if (keyCode.code == "ArrowRight") {
//		console.log("Strelka NADIASNO") 
		MYmoveX = moveX;
		MYmoveY = stopY;
	}	


	if (keyCode.code == "Space") {
		MYmoveX=stopX
		MYmoveY=stopY
	}

}();
