export default class Paddle{

    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 150;
        this.height = 30;

        this.maxSpeed = 7;
        this.speed = 0;
        
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 60,
        }
    }
    
    draw(ctx){
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        console.log("got printed at : ", this.position);
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }
    
    moveRight(){
        this.speed = this.maxSpeed;
    }

    stop(){
        this.speed = 0
    }

    update(deltaTime){
        this.position.x += this.speed;

        if(this.position.x + this.width >= this.gameWidth){
            this.position.x = this.gameWidth - this.width;
        }
        if(this.position.x < 0){
            this.position.x = 0;
        }
    }

}