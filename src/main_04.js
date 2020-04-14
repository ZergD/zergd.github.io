//import "/src/utils.js";

function test1(){
    console.log("hello");

    let ids = [1, 2, 3];
    console.log("type of ids = " + typeof(ids));
    let car1, car2, car3;
    [car1, car2, car3] = ids;
    console.log(car1, car2, car3);

    let myvar;
    // skis the first element, and puts the rest to myvar
    //[...myvar] = ids;
    //console.log("myvar = " + myvar);
    //console.log("myvar type = ", + typeof(myvar));
    //
    //function printEverything(...all){
    //    console.log(all);
    //    console.log("type of all = " + typeof(all));
    //    all.forEach(function(e){
    //        console.log(e);
    //    })
    //}


    //printEverything(1, 2, "dazpdao", 1.2312, "Asimov", "Metarch");
    //printEverything(..."abc");


    function start(c1, c2, c3, ...rest){
        console.log("the rest = " + rest);
    }

    let carIds = [1, 2, 3, 4, 5, 6];
    start(...carIds);


    let words = ["hello", "dear", "human"];

}


let canvas = document.getElementById("gameScreen");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c will always be for context
let c = canvas.getContext("2d");

// create and position walls
let wall_side_offsets = 100;
let wall_width = 50;

let left_wall = { 
    x: wall_side_offsets,
    y: 100,
    width: wall_width,
    height: 500 
}
let right_wall = { 
    x: canvas.width - wall_side_offsets - wall_width,
    y: 100,
    width: 50,
    height: 500
}

context_draw(c, left_wall, "green");
context_draw(c, right_wall, "green");
let x = canvas.width / 2;
let y = canvas.height / 2;
console.log(x, y);

function run_loop(){
    //c.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
   
    var time = new Date();
    c.fillStyle = "white";
    c.beginPath();
    c.arc(x, y, 50, 0, 2 * Math.PI, false);
    c.fill();
    c.save();
    c.translate(0.5, 0.5);
    //c.rotate(
    //    ((2 * Math.PI) / 10) * time.getSeconds() +
    //    ((2 * Math.PI) / 10000) * time.getMilliseconds()
    //    );
    
    c.translate(105, 0);

    console.log("drawing");
    window.requestAnimationFrame(run_loop);
}

//window.requestAnimationFrame(run_loop);

c.beginPath();
c.fillStyle = "white";
c.moveTo(x, y); // top triangle isocele looking up
c.lineTo(x - 50, y + 100);
c.lineTo(x + 50, y + 100);
c.fill();
//c.closePath();
//c.stroke();

