export default class InputHandler{

    constructor(paddle, game) {
       
        document.addEventListener("keydown", event => {
            game.msgError = event.keyCode;
            switch(event.keyCode){
                case 37:
                    console.log("Left pressed...");
                    paddle.moveLeft();
                    break;
                case 39:
                    console.log("Right pressed...");
                    paddle.moveRight();
                    break;
                // echap key
                case 27:
                    game.togglePause();
                    break;
                // spaceBar key
                case 32:
                    //game.start();
                    console.log("spaceBar was pressed");
                    game.start();
                    break;
            }
        });
        
        document.addEventListener("keyup", event => {
            switch(event.keyCode){
                case 37:
                    if(paddle.speed < 0) paddle.stop();
                    break;
                case 39:
                    if(paddle.speed > 0) paddle.stop();
                    break;
            }
        });

        document.addEventListener("deviceorientation", event => {
            var x = event.beta,  // En degré sur l'interval [-180,180].
                y = event.gamma; // En degré sur l'interval [-90,90].

            if(0 < y < 90){
                paddle.moveLeft();
            }
            else if (-90 < y < 0){
                paddle.moveRight();
            }
            game.msgError = y;


            //resultat.innerHTML  = "beta : " + x + "<br />";
            //resultat.innerHTML += "gamma: " + y + "<br />";

            //// Parce-que l'on ne veut pas avoir l'appareil à l'envers.
            //// On restreint les valeurs de x à l'intervalle [-90,90].
            //if (x >  90) { x =  90};
            //if (x < -90) { x = -90};
            //// Pour rendre le calcul plus simple.
            //// On délimite l'intervalle de x et y sur [0, 180].
            //x += 90;
            //y += 90;

            //// 10 est la moitié de la taille de la balle.
            //// Cela centre le point de positionnement au centre de la balle.

            //balle.style.top  = (maxX * x / 180 - 10) + "px";
            //balle.style.left = (maxY * y / 180 - 10) + "px";
        });

        // phone part
        document.addEventListener("touchstart", event => {
            game.msgError = event.keyCode;
        });

    }
}