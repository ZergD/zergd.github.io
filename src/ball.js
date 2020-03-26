import { detectCollision } from "/src/collisionDetection.js";

export default class Ball {
    constructor(game) {
        this.game = game
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById("imgBall");
        this.position = { x: 10, y: 300 };
        // this.speed = { x: 3, y: 4 };
        this.speed = { x: 3, y: 3 };
        this.size = 35;
    }

    draw(ctx) {
        ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);
        ctx.drawImage(this.image, this.position.x,
            this.position.y, this.size, this.size);
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
        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        // collision with paddle
        if (detectCollision(this, this.game.paddle)) {
                this.speed.y = -this.speed.y;
                this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}