
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
