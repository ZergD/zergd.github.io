export default class Ball{
    constructor(game){
        this.game = game
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = document.getElementById("imgBall");
        this.position = { x: 10, y: 100 };
        this.speed = { x: 3, y: 2 };
        // this.speed = { x: 0.1, y: 0.1 };
        this.size = 40;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x,
             this.position.y, this.size, this.size);
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        // console.log(this.position.x, this.position.y);

        // wall left and right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x;
        }
        
        // wall up and down
        if (this.position.y + this.size > this.gameHeight || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }

        // paddle check
        let bottomOfBall = this.position.y + this.size;
        let topOfPaddle = this.game.paddle.position.y;
        let leftSideOfPaddle = this.game.paddle.position.x;
        let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

        if (bottomOfBall >= topOfPaddle 
            && this.position.x > leftSideOfPaddle
            && this.position.x < rightSideOfPaddle){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }

    }
}