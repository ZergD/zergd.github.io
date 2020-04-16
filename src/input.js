export default class InputHandler{

    constructor(paddle, game) {
        document.addEventListener("keydown", event => {
            //console.log(event.keyCode);
            switch(event.keyCode){
                case 37:
                    console.log("Left pressed...");
                    paddle.moveLeft();
                    break;
                case 39:
                    console.log("Right pressed...");
                    paddle.moveRight();
                    break;
                // echap key
                case 27:
                    game.togglePause();
                    break;
                // spaceBar key
                case 32:
                    //game.start();
                    console.log("spaceBar was pressed");
                    game.start()
                    break;
            }
        });
        
        document.addEventListener("keyup", event => {
            switch(event.keyCode){
                case 37:
                    if(paddle.speed < 0) paddle.stop();
                    break;
                case 39:
                    if(paddle.speed > 0) paddle.stop();
                    break;
            }
        });

        // phone part
        document.addEventListener("touchstart", event => {
            game.displayError(event.KeyCode);
        });
    }
}