class Box {
    constructor(x, y, w, h, world){
        this.width = w;
        this.height = h;
        this.options = {
            mass: 2,
            friction: 0.5,
            restitution: 0.3
        }
        this.body = Bodies.rectangle(x, y, w, h, this.options);
        // global scope used because imported before in html
        World.add(world, this.body);
        console.log(this);
    }

    show(){
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);

        strokeWeight(1);
        stroke(255);
        fill(127);

        rect(0, 0, this.width, this.height);

        pop();



    }
};