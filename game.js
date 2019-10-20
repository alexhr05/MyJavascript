// Creating variables
var myX = 110, myY = 110, MYmoveX=0, MYmoveY=0;
function update() {	


	if ( MYmoveY > 0 ) {		// Проверка дали се движи надолу
		if ( myY < 490 ) {		// Проверка дали е в екрана, дали не напуска екрана
			myY=myY+MYmoveY;	// Ако проверките са минали успешно, задава нова позиция
		}
	}
	if ( MYmoveY < 0 ) {
		if ( myY > 20 ) {
			myY=myY+MYmoveY;
		}
	}
	if ( MYmoveX > 0 ) {
		if ( myX < 490 ) {
			myX=myX+MYmoveX;
		}
	}
	if ( MYmoveX < 0 ) {
		if ( myX > 20 ) {
			myX=myX+MYmoveX;
		}
	}




}
function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
}

function keyup(key) {

	// Проверява за стрелка надолу
	if (key == 40) {		// Стрелка надолу
		console.log("Strelka Nadolu") 
		MYmoveY=2
		MYmoveX=0
		
	}	
	if (key == 38) {
		console.log("Strelka NAGORE") 
		MYmoveY=-2
		MYmoveX=0
	}	
	if (key == key_left) {
		console.log("Strelka NALIAVO") 
		MYmoveX = -2
		MYmoveY =  0
	}	
	if (key == key_right) {
		console.log("Strelka NADIASNO") 
		MYmoveX = 2;
		MYmoveY = 0;
	}	


	if (key == 32) {
		MYmoveX=0
		MYmoveY=0
	}
    
       
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
