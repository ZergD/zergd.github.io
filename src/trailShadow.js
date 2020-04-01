export default class TrailShadow{
    constructor(position){
        this.position = position;
        console.log("new trail got constructed");
    }

    draw(ctx){
        // draw the trail of the ball
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
        console.log("i Trailshadow get called with args=" + this.position.x, this.position.y);
        ctx.stroke();
    }

    update(){
        // nothing
    }

}