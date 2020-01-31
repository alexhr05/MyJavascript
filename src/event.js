const event=new function(){
document.addEventListener('keydown', game.KeyPressed);
document.addEventListener('keyup', game.KeyUp);

this.init = function () {
 
		
	function KeyUp(keyCode){
		window.console.log(keyCode.code);

		if (keyCode.code == "ArrowDown") {		// Стрелка надолу
			game.handleMove(0,1);
		}	
		if (keyCode.code == "ArrowUp") {
			game.handleMove(0,-1);
		}	
		if (keyCode.code == "ArrowLeft") {
			game.handleMove(-1,0);

			/*	game.MYmoveX = game.stopX;
		game.MYmoveY = game.stopY;
	*/	
		}	
		if (keyCode.code == "ArrowRight") {
			game.handleMove(1,0);
	
			//		game.MYmoveX = game.stopX;
	//		game.MYmoveY = game.stopY;
		}	
	}

	function KeyPressed(keyCode){
	
	/*
		//	window.console.log("natisnat e buton 8888");
		window.console.log(keyCode.code);

		// Проверява за стрелка надолу
		if (keyCode.code == "ArrowDown") {		// Стрелка надолу
	//		console.log("Strelka Nadolu") 
			game.MYmoveY=game.moveY;
			game.MYmoveX=game.stopX;
		
		}	
		if (keyCode.code == "ArrowUp") {
	//		console.log("Strelka NAGORE") 
			game.MYmoveY=-game.moveY;
			game.MYmoveX=game.stopX;
		
		}	
		if (keyCode.code == "ArrowLeft") {
	//		console.log("Strelka NALIAVO") 
			game.MYmoveX = -game.moveX;
			game.MYmoveY =  game.stopY;
		
		}	
		if (keyCode.code == "ArrowRight") {
	//		console.log("Strelka NADIASNO") 
			game.MYmoveX = game.moveX;
			game.MYmoveY = game.stopY;
		}	


		if (keyCode.code == "Space") {
			game.MYmoveX=game.stopX
			game.MYmoveY=game.stopY
		}
*/
	}

}	
	

}();