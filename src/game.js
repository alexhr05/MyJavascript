var game = function () {
    let level;
    let x;
    let y;
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



    function drawfunction() {
        //За бързина     
        speedState = !speedState;

        if (!iAmSpeed && !speedState) {
            return;
        }
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);


        ctx.fillRect(backgroundLevel1Img, 0, 0, canvasWidth, canvasHeight);
        const map = level.map;
        for (let c = 0; c < numberBlocksWidth; c++) {
            for (let r = 0; r < map.lenght; r++) {
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







    }



    this.init = function (_level) {
        level = _level;
        x = level.x;
        y = level.y;




    };
}();