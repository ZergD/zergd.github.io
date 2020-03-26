export default class Brick{
    constructor(game, position) {
        this.game = game;
        this.image = document.getElementById("imgBrick");
        this.position = position;
        this.width = 100;
        this.height = 30;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){
        // todo
    }
}