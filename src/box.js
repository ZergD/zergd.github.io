class Box {
    constructor(x, y, w, h, world){
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x, y, w, h);
        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rect(0, 0, this.width, this.height);
        pop();

    }
};