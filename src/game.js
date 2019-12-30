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



let ccc = document.getElementById("canvas-id");
const ctx = ccc.getContext('2d');
const brickwall = document.getElementById("scream2");

const img1 = document.getElementById("scream1");
const img2 = document.getElementById("scream2");
const img3 = document.getElementById("scream3");
const img4 = document.getElementById("scream4");


let map =[
  "*******************",
  "*    *         ****",
  "*    *           **",
  "*    *         **  ",
  "*    *         **  ",
  "*    *         **  ",
  "*    *         **  ",
  "*    *         **  ",
  "*    *         **  ",
  "*    *         **  ",
  "*    *         **  ",
  "*  X           *  *",
  "*    *         ****",
  "*******************"
];
const blockSize={
 width: 30,
 height: 30
};
console.log(map)
console.log(map.length)		// Максимално надолу
console.log(map[0].length)	// Максимално надясно


function KeyUp(e) {
//	window.console.log("natisnat e buton 8888");
	window.console.log(e.code);


	if (e.code == "KeyR") {		// Running
		console.log("Otpusnat klavish R") 
		running = 0;
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
	setInterval(drawFunction, 200);
}

// Главна функция, тук прави цикъл през 30мс
function drawFunction() {

	// Изтрива старото човече
	ctx.clearRect (myX*blockSize.width, myY*blockSize.height, blockSize.width, blockSize.height)



	document.addEventListener('keydown', KeyPressed);
	document.addEventListener('keyup', KeyUp);


//console.log('map.length')
//console.log(map.length)
	for(let r=0; r<map.length; r++){
//console.log('map[p].length')
//console.log(map[r])
		for(let c=0; c<map[r].length; c++){
//console.log(map[p][q])
            //console.log(r + " -- " + c)
			if(map[r][c]=='*'){
				//console.log(r*blockSize.height+"  " + c*blockSize.width);
				ctx.drawImage (brickwall,c*blockSize.width,r*blockSize.height,blockSize.width,blockSize.height);
			}
		}
	}
	
	// Прави проверки дали е ударено нещо
//	for(let r=0; r<map.length; r++){
//		for(let c=0; c<map[r].length; c++){
//            //console.log(r + " -- " + c)
//			if(map[r][c]=='*' && myX==c && myY==r){
//				console.log("udareno blockche vatre");
//				MYmoveX = 0;
//				MYmoveY = 0;
//			}
//		}
//	}
	
	if(map[myY][myX]=='*') {
		console.log("udareno blockche vatre");
		MYmoveX = 0;
		MYmoveY = 0;
	}	
	
	// Проверка дали е ВЪТРЕ В екрана
	if ( MYmoveY > 0 ) {		// Проверка дали се движи надолу
		if ( myY < (map.length-2) ) {		// Проверка дали е в екрана, дали не напуска екрана
			if ( ot_dolu == 0) {
				// Движение НАДОЛУ
				myY=myY+MYmoveY+running;
			} else {
			}
		} else
			console.log("Izvun ekran nadolu");
	}
	if ( MYmoveY < 0 ) {
		if ( myY > 1 ) {
			if ( ot_gore == 0) {
				// Движение НАГОРЕ
				myY=myY+MYmoveY-running;
			} else {
			}
		} else
			console.log("Izvun ekran nagore");
	}
	if ( MYmoveX > 0 ) {
		if ( myX < (map[0].length-2) ) {
			if ( ot_diasno == 0) {
				// Движение НАДЯСНО
				myX=myX+MYmoveX+running;
			} else {
			}
		} else
			console.log("Izvun ekran nadiasno");
	}
	if ( MYmoveX < 0 ) {
		if ( myX > 1 ) {
			if ( ot_liavo == 0) {
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

	
}
