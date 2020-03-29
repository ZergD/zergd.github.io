import { detectCollision } from "/src/collisionDetection.js";

export default class Brick{
    constructor(game, position) {
        this.game = game;
        this.image = document.getElementById("imgBrick");
        this.image = document.getElementById("imgBrick");
        this.position = position;
        this.width = 100;
        this.height = 30;
        // flag when to be deleted
        this.marked_for_deletion = false;
    }

    draw(ctx){
        // ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){
        if (detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = -(this.game.ball.speed.y);
            this.marked_for_deletion = true;
        }
    }
}