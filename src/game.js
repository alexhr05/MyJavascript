const game = new function () {
    let level;
    let px = 0;
    let py = 0;

    let characterWalkingLeft = true;

    const characterWalkingRightImg = document.getElementById("characterWalkingRight");
    const diamondTransparentImg = document.getElementById("diamondTransparent");
    const characterWalkingLeftImg = document.getElementById("characterWalkingLeft");
    const backgroundLevel1Img = document.getElementById("backgroundLevel1");
    const canvas = document.getElementById("canvas-id");
    const ctx = canvas.getContext('2d');
    const brickImg = document.getElementById("brick");

    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    const blockSizeWidth = 50;
    const blockSizeHeight = 50;

    this.CollectDiamonds;

    function drawFunction() {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(backgroundLevel1Img, 0, 0, canvasWidth, canvasHeight);

        const map = level.map;

        for (let r = 0; r < map.length; r++) {
            for (let c = 0; c < map[r].length; c++) {
                switch (map[r][c]) {
                    case '*':
                        ctx.drawImage(brickImg, c * blockSizeWidth, r * blockSizeHeight, blockSizeWidth, blockSizeHeight);
                        break;
                    case 'D':
                        ctx.drawImage(diamondTransparentImg, c * blockSizeWidth, r * blockSizeHeight, blockSizeWidth, blockSizeHeight);
                        break;
                }
            }
        }

        ctx.drawImage(characterWalkingLeft ?/*Когато е истина*/  characterWalkingLeftImg :/*Когато е лъжа*/  characterWalkingRightImg,
            px, py, blockSizeWidth, blockSizeHeight );
    };

    this.init = function (_level) {
        level = _level;
        //Записва й се стойноста
        console.log(level);
        
        // на всяка половин секунда, човечето слиза надолу под влиянието на гравитацията
        setInterval(() => game.handleMove(0, 1), level.refreshRate());
    };

    this.handleMove = function (scaleX /* Колко бързо се движи по x надясно и наляво*/, scaleY/* Колко бързо се движи по y надясно и наляво*/) {

        const nx = px + scaleX*level.squareSizeX();
        const ny = py + scaleY*level.squareSizeY();

        const map = level.map;

        // ако човечето излиза извън контурите на екрана, излиза от функцията
        if (nx < 0 || nx >= (map[0].length)*blockSizeHeight || ny < 0 || ny >= (map.length)*blockSizeWidth) {
            return;
        }

        // взимаме покритите от човечето блокове - макс. 4 на брой
        const hoveredBlocks = getHoveredBlocks(nx, ny);

        let toMove = true;
        hoveredBlocks.forEach((point)=> {
            if (!toTakeMoveAction(point)) {
                toMove = false;
            }
        });

        // човечето не е върху скала или земя
        if (toMove) {
            // събира диаманти от покритите блокове
            hoveredBlocks.forEach((point)=> {
                if(map[point.y][point.x] === 'D') {
                    map[point.y][point.x] = ' ';
                    this.CollectDiamonds++;
                }
            });

            px = nx;
            py = ny;

			if (scaleX < 0) characterWalkingLeft = true;
			if (scaleX > 0) characterWalkingLeft = false;

            // прерисува
            drawFunction();
        }
    };

    // проверява дали човечето може да се премести на новите координати. Резултатът е булева стойност.
    function toTakeMoveAction(point /* {x: number, y: number} */) {
        const map = level.map;

        if (map.length <= point.y || map[0].length <= point.x) {
            return false;
        }

        switch (map[point.y][point.x]) {
            case '*':
                // Стена, координатите не се променят и се излиза от функцията
                return false;
            case 'q':
                // Земя, координатите не се променят и се излиза от функцията
                return false;
            default:
                break;
        }

        return true;
    }

    // взима координатите(горен ляв ъгъл) на всички блокове покрити от човечето(неговото блокче)
    function getHoveredBlocks(leftCornerX, leftCornerY)
    {
        return [
            getBlock(leftCornerX, leftCornerY), 
            getBlock(leftCornerX + blockSizeWidth - 1, leftCornerY),
            getBlock(leftCornerX, leftCornerY + blockSizeHeight - 1),
            getBlock(leftCornerX + blockSizeWidth - 1, leftCornerY + blockSizeHeight - 1),
        ];
    }

    // по относителни координати, връща координатите(горен ляв ъгъл) на блокчето под точката
    function getBlock(x, y) {
        const cx = x/blockSizeWidth;
        const cy = y/blockSizeHeight;

        return { x: cx < 1 ? 0 : Math.floor(cx), y: cy < 1 ? 0 : Math.floor(cy) };
//if (cx<1) 
//	x=0 
//else 
//	x=math.floor(cx)
			
		
		
    }
}();