console.log("paddle hello");

export default class Paddle{

    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 150;
        this.height = 30;

        this.maxSpeed = 7;
        this.speed = 0;
        
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
    }

    moveLeft(){
        console.log("we moved left")
        this.speed = -this.maxSpeed;
    }
    
    moveRight(){
        console.log("we moved right")
        this.speed = this.maxSpeed;
    }

    draw(ctx){
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        console.log("The paddle got drawn");
    }

    update(deltaTime){
        if (!deltaTime) return;
        
        this.position.x += this.speed;

        if(this.position.x + this.width + this.speed >= this.gameWidth){
            this.position.x = this.gameWidth - this.width;
        }
        if(this.position.x + this.speed < 0){
            this.position.x = 0;
        }
    }

}