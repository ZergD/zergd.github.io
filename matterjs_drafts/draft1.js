// module aliases
// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     World = Matter.World,
//     Bodies = Matter.Bodies;
// 
// // create an engine
// var engine = Engine.create();
// 
// // create a renderer
// var render = Render.create({
//     element: document.body,
//     engine: engine
// });
// 
// // create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
// 
// // add all of the bodies to the world
// World.add(engine.world, [boxA, boxB, ground]);
// 
// // run the engine
// Engine.run(engine);
// 
// // run the renderer
// Render.run(render);

var Example = Example || {};

Example.gravity = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            showVelocity: true,
            showAngleIndicator: true
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    World.add(world, [
        Bodies.rectangle(250, 0, 800, 50, { isStatic: true }), // top wall
        Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }), // bot wall
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }), // right wall
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true }) // left wall
    ]);

    engine.world.gravity.y = -1;
    
    var stack = Composites.stack(50, 120, 11, 5, 0, 0, function(x, y) {
        switch (Math.round(Common.random(0, 1))) {

        case 0:
            if (Common.random() < 0.8) {
                return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50));
            } else {
                return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30));
            }
        case 1:
            return Bodies.polygon(x, y, Math.round(Common.random(1, 8)), Common.random(20, 50));

        }
    });
    
    World.add(world, stack);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });


    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};


Example.gravity();

function inverse_gravity(engine_){
    engine_.world.gravity.y *= -1;

}


//window.setTimeout(inverse_gravity(engine), 2000);