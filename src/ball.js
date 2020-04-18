import { detectCollision } from "/src/collisionDetection.js";

export default class Ball {
    constructor(game) {
        this.game = game
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById("imgBall");
        // this.speed = { x: 5, y: 5 };
        this.size = 35;
        this.reset();
    }

    reset(){
        this.oldPosition = { x: null, y: null };
        this.speed = { x: 2, y: 2 };
        this.position = { x: 100, y: 600 };
    }

    draw(ctx) {
        // draws square borders
        // ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);
        ctx.drawImage(this.image, this.position.x,
            this.position.y, this.size, this.size);

        // draw it's shadow trail, a line for the moment
        // if ( this.oldPosition.x != null ){
        //     ctx.beginPath();
        //     ctx.arc(this.oldPosition.x, this.oldPosition.y, 10, 0, 2 * Math.PI);
        //     ctx.fill();
        //     let x = this.oldPosition.x;
        //     let y = this.oldPosition.y;
            // ctx.stroke();
        //}
        
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        // console.log(this.position.x, this.position.y);

        // wall left and right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        // wall up and down
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        if (this.position.y + this.size > this.gameHeight){
            this.game.lives --;
            this.reset();
        }

        // collision with paddle
        if (detectCollision(this, this.game.paddle)) {
                this.speed.y = -this.speed.y;
                this.position.y = this.game.paddle.position.y - this.size;
        }
        this.oldPosition = this.position;
    }
    
    create_trail_shadow(){

    }
}