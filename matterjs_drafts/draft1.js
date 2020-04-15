var Example = Example || {};

Example.car = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
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
            width: 800,
            height: 1200,
            showAngleIndicator: true,
            showCollisions: true
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    World.add(world, [
        // walls
        Bodies.rectangle(400, -300, 800, 50, { isStatic: true }), // top
        Bodies.rectangle(400, 1200, 800, 50, { isStatic: true }), // bot
        Bodies.rectangle(850, 400, 50, 1500, { isStatic: true }), // right
        Bodies.rectangle(-50, 400, 50, 1500, { isStatic: true }) // left
    ]);

    var scale = 0.9;
    for (let i = 0; i < 10; i++){
        World.add(world, Composites.car(150 + i * 10, 100 + i * 10, 150 * scale, 30 * scale, 30 * scale));
    }
    World.add(world, Composites.car(150, 100, 150 * scale, 30 * scale, 30 * scale));
    
    scale = 0.8;
    World.add(world, Composites.car(350, 300, 150 * scale, 30 * scale, 30 * scale));
    
    World.add(world, [
        //Bodies.rectangle(100, 150, 400, 20, { isStatic: true, angle: Math.PI * 0.06 }),
        Bodies.rectangle(400, 350, 200, 20, { isStatic: true}),
        //Bodies.rectangle(100, 660, 600, 20, { isStatic: true, angle: Math.PI * 0.04 })
    ]);

    let r = setInterval(function(){
        console.log("test");    
        engine.world.gravity.y = (engine.world.gravity.y * -1).toFixed(2);
        console.log("gravity = " + engine.world.gravity.y);
    }, 2000);

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
        min: { x: -200, y: 0 },
        max: { x: 1000, y: 1000 }
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

Example.car();
