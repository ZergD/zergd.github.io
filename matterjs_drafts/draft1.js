// var Example = Example || {};
// 
// Example.sprites = function() {
//     var Engine = Matter.Engine,
//         Render = Matter.Render,
//         Runner = Matter.Runner,
//         Composites = Matter.Composites,
//         Common = Matter.Common,
//         MouseConstraint = Matter.MouseConstraint,
//         Mouse = Matter.Mouse,
//         World = Matter.World,
//         Bodies = Matter.Bodies;
// 
//     // create engine
//     var engine = Engine.create(),
//         world = engine.world;
// 
//     // create renderer
//     var render = Render.create({
//         element: document.body,
//         engine: engine,
//         options: {
//             width: 800,
//             height: 1200,
//             background: '#0f0f13',
//             showAngleIndicator: false,
//             wireframes: false
//         }
//     });
// 
//     Render.run(render);
// 
//     // create runner
//     var runner = Runner.create();
//     Runner.run(runner, engine);
// 
//     // add bodies
//     var offset = 10,
//         options = { 
//             isStatic: true
//         };
// 
//     world.bodies = [];
// 
//     // these static walls will not be rendered in this sprites example, see options
//     World.add(world, [
//         Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options), // top
//         Bodies.rectangle(400, 1100, 800.5 + 2 * offset, 50.5, options), // bot
//         Bodies.rectangle(800 + offset, 500, 50.5, 1200.5 + 2 * offset, options), // right
//         Bodies.rectangle(-offset, 500, 50.5, 1200.5 + 2 * offset, options) // left
//     ]);
// 
//     var stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
//         if (Common.random() > 0.35) {
//             return Bodies.rectangle(x, y, 64, 64, {
//                 render: {
//                     strokeStyle: '#ffffff',
//                     sprite: {
//                         texture: './imgs/box.png'
//                     }
//                 }
//             });
//         } else {
//             return Bodies.circle(x, y, 46, {
//                 density: 0.0005,
//                 frictionAir: 0.06,
//                 restitution: 0.3,
//                 friction: 0.01,
//                 render: {
//                     sprite: {
//                         texture: './imgs/ball.png'
//                     }
//                 }
//             });
//         }
//     });
// 
//  //    let r = setInterval(function(){
//  //        engine.world.gravity.y = (engine.world.gravity.y * -1).toFixed(2);
//  //        console.log("gravity = " + engine.world.gravity.y);
//  //    }, 4000);
// 
//     engine.world.gravity.y = 0.25;
// 
//     World.add(world, stack);
// 
//     // add mouse control
//     var mouse = Mouse.create(render.canvas),
//         mouseConstraint = MouseConstraint.create(engine, {
//             mouse: mouse,
//             constraint: {
//                 stiffness: 0.2,
//                 render: {
//                     visible: false
//                 }
//             }
//         });
// 
//     World.add(world, mouseConstraint);
// 
//     // keep the mouse in sync with rendering
//     render.mouse = mouse;
// 
//     // fit the render viewport to the scene
//     Render.lookAt(render, {
//         min: { x: 0, y: 0 },
//         max: { x: 800, y: 1200 }
//     });
// 
//     // context for MatterTools.Demo
//     return {
//         engine: engine,
//         runner: runner,
//         render: render,
//         canvas: render.canvas,
//         stop: function() {
//             Matter.Render.stop(render);
//             Matter.Runner.stop(runner);
//         }
//     };
// };

//Example.sprites();












var Engine = Matter.Engine,
//   Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;
let world;
let boxes = [];

function setup() {
    createCanvas(800, 600);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);
    //box = Bodies.rectangle(400, 200, 100, 100);
    //World.add(world, boxes);
}

function mousePressed(){
    boxes.push(new Box(mouseX, mouseY, 50, 50, world));

}
  
function draw() {
    background(51);
    for (let i = 0; i < boxes.length; i++){
        boxes[i].show();
    }

    console.log("hello");
    
}