console.log("aaaaaa");

	  
let running = 0;			// Дали тича в момента
let running_step = 4;		// С колко да тича
let ot_dolu=0, ot_gore=0, ot_diasno=0, ot_liavo=0;


const moveX = 1;
const moveY = 1;
const stopX = 0;
const stopY = 0;

const START = {
            x: 3,
            y: 3,
};
let myX = START.x, myY = START.y, MYmoveX=stopX, MYmoveY=stopY;

let TextX_1 = 1050;
let TextY_1 = 20;
let TextY_redove = 20;
let TextX_2 = 1000;
let	TextY_Level = 20;
let TextY_2 = 60;
let CollectDiamonds = 0;
let Level = 1;
let ccc = document.getElementById("canvas-id");
const ctx = ccc.getContext('2d');
const brickwall = document.getElementById("scream2");
const diamond   = document.getElementById("scream3");

const img1 = document.getElementById("scream1");
const img2 = document.getElementById("scream2");
const img3 = document.getElementById("scream3");
const img4 = document.getElementById("scream4");
const img5 = document.getElementById("scream5");
const img6 = document.getElementById("scream6");
const img7 = document.getElementById("scream7");


let map =[
  "     *             ",
  "     *            *",
  "     *   D        *",
  "     *             ",
  "     *             ",
  "     *             ",
  "     *             ",
  "     *           * ",
  "    D*      ****   ",
  "     *             ",
  "     *            *",
  "                  *",
  "     *         ****",
  "                   "
];

const blockSize={
 width: 50,
 height: 50
};

function KeyUp(e) {
//	window.console.log("natisnat e buton 8888");
	window.console.log(e.code);


	if (e.code == "KeyR") {		// Running
		console.log("Otpusnat klavish R") 
		running = 0;
	}	
	
	if (e.code == "ArrowDown") {		// Стрелка надолу
		MYmoveY= stopY;
		MYmoveX= stopX;
		
	}	
	if (e.code == "ArrowUp") {
		MYmoveY= stopX;
		MYmoveX= stopY;
		
	}	
	if (e.code == "ArrowLeft") {
		MYmoveX = stopX;
		MYmoveY = stopY;
		
	}	
	if (e.code == "ArrowRight") {
		MYmoveX = stopX;
		MYmoveY = stopY;
	}	

}

function KeyPressed(e) {
//	window.console.log("natisnat e buton 8888");
	window.console.log(e.code);

	if (e.code == "KeyR") {		// Running
		console.log("Natisnat klavish R") 
		running = running_step;
	}	

	

	// Проверява за стрелка надолу
	if (e.code == "ArrowDown") {		// Стрелка надолу
//		console.log("Strelka Nadolu") 
		MYmoveY=moveY;
		MYmoveX=stopX;
		
	}	
	if (e.code == "ArrowUp") {
//		console.log("Strelka NAGORE") 
		MYmoveY=-moveY;
		MYmoveX=stopX;
		
	}	
	if (e.code == "ArrowLeft") {
//		console.log("Strelka NALIAVO") 
		MYmoveX = -moveX;
		MYmoveY =  stopY;
		
	}	
	if (e.code == "ArrowRight") {
//		console.log("Strelka NADIASNO") 
		MYmoveX = moveX;
		MYmoveY = stopY;
	}	


	if (e.code == "Space") {
		MYmoveX=stopX
		MYmoveY=stopY
	}
  
	
}

function init() {
	
	
	drawFunction();
	setInterval(drawFunction, 100);
}

// Главна функция, тук прави цикъл през 30мс
function drawFunction() {

	// Изтрива старото човече
//	ctx.clearRect (myX*blockSize.width, myY*blockSize.height, blockSize.width, blockSize.height)

	// Проверява кое ниво е в момента
	// и увеличава нивото при достигане на най-дясно
	if ( myX >= map[0].length-1 ) {
		Level++;
		myX = START.x;
		myY = START.y;
	}


	// Печата background
	if ( Level == 1 ) {
		ctx.drawImage(img5, 0, 0, 950, 700);	
	}
	if ( Level == 2 ) {
		ctx.drawImage(img6, 0, 0, 950, 700);	
		map =[
			"*******************",
			"*                 *",
			"*         *       *",
			"*    D    *        ",
			"*         *        ",
			"*         *        ",
			"*                  ",
			"*      D           ",
			"*                  ",
			"*                  ",
			"***               *",
			"*          D      *",
			"*              ****",
			"*******************"
		];
	}
	if ( Level == 3 ) {
		ctx.drawImage(img7, 0, 0, 950, 700);	
		map =[
			"*******************",
			"*                 *",
			"*         *       *",
			"*    D    *        ",
			"*         *        ",
			"*         *        ",
			"*                  ",
			"*      D           ",
			"*                  ",
			"*                  ",
			"***               *",
			"*          D      *",
			"*              ****",
			"*******************"
		];
	}



	document.addEventListener('keydown', KeyPressed);
	document.addEventListener('keyup', KeyUp);


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
			if(map[myY+1][myX]!='*') {
				// Движение НАДОЛУ
				myY=myY+MYmoveY+running;
			} else {
			}
		} else
			console.log("Izvun ekran nadolu");
	}
	if ( MYmoveY < 0 ) {
		if ( myY > 1 ) {
			if(map[myY-1][myX]!='*') {
				// Движение НАГОРЕ
				myY=myY+MYmoveY-running;
			} else {
			}
		} else
			console.log("Izvun ekran nagore");
	}
	if ( MYmoveX > 0 ) {
		if ( myX < (map[0].length-1) ) {
			if(map[myY][myX+1]!='*') {
				// Движение НАДЯСНО
				myX=myX+MYmoveX+running;
			} else {
			}
		} else
			console.log("Izvun ekran nadiasno");
	}
	if ( MYmoveX < 0 ) {
		if ( myX > 1 ) {
			if(map[myY][myX-1]!='*') {
				// Движение НАЛЯВО
				myX=myX+MYmoveX-running;
			} else {
			}
		} else
			console.log("Izvun ekran naliavo");
	}
	
			
	// Нашето човече
	if ( MYmoveX >= 0 ) {
		ctx.drawImage(img1, myX*blockSize.width, myY*blockSize.height, blockSize.width, blockSize.height);	
	}
	if ( MYmoveX < 0 ) {
		ctx.drawImage(img4, myX*blockSize.width, myY*blockSize.height, blockSize.width, blockSize.height);	
	}
	
	// Изтрива стария резултат
	ctx.clearRect ( TextX_1+115 , TextY_1 + TextY_redove*2-16 , 60 , 20 );
	ctx.clearRect ( TextX_1+115 , TextY_1 + TextY_redove*3-16 , 60 , 20 );
	
	
	ctx.font = "20px Verdana";
	ctx.fillText("Hello World", TextX_1, TextY_1 + TextY_redove*1); 
	ctx.fillText("Резултат :", 	TextX_1, TextY_1 + TextY_redove*2); 
	ctx.fillText("Ниво :", 	TextX_1, TextY_1 + TextY_redove*3); 
	// Печата резултат:
	ctx.fillText(CollectDiamonds, 	TextX_1+115, TextY_1 + TextY_redove*2); 
	// Печата ниво
	ctx.fillText(Level,TextX_1+115, TextY_1 + TextY_redove*3); 

	
}
