export default class InputHandler{

    constructor(paddle) {
        document.addEventListener("keydown", event => {
            console.log(event.keyCode);
            switch(event.keyCode){
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;
            }
        });
    }
}