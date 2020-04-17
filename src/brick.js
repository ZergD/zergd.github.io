import { detectCollision } from "/src/collisionDetection.js";

export default class Brick{
    constructor(game, position, name = "") {
        // if the bricks name === alan, tito, steph, marc, cloak, kissy draw accordingly
        this.photos = {
            "marc": document.getElementById("imgMarc"),
            "stephane": document.getElementById("imgStephane"),
            "cloak": document.getElementById("imgCloak"),
            "kissy": document.getElementById("imgKissy"),
            "tito": document.getElementById("imgTito"),
            "razy": document.getElementById("imgRazyel"),
            "" : document.getElementById("imgBrick")
        }
        this.name = name;
        this.game = game;
        //this.image = document.getElementById("imgBrick");
        this.position = position;
        this.width = 75;
        this.height = 75;
        // flag when to be deleted
        this.marked_for_deletion = false;
    }

    draw(ctx){
        // ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        
        // make it more rectangular if it is cloak
        if (this.name === "cloak"){
            ctx.drawImage(this.photos[this.name], this.position.x, this.position.y, this.width * 2, this.height);
        }
        else {
            ctx.drawImage(this.photos[this.name], this.position.x, this.position.y, this.width, this.height);
        }
    }

    update(deltaTime){
        if (detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = -(this.game.ball.speed.y);
            this.marked_for_deletion = true;
        }
    }
}