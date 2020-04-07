


var canvas = document.getElementById("gameScreen");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var map = [
    {x: 20, y: 20, w: 60, h: 60},
    {x: 30, y: 50, w: 76, h: 60}
];

var hover = false, id;
var _i, _b;
function renderMap() {
    for(_i = 0; _b = map[_i]; _i ++) {
        ctx.fillStyle = (hover && id === _i) ? "red" : "blue";
        ctx.fillRect(_b.x, _b.y, _b.w, _b.h);
    }
}
// Render everything
renderMap();
canvas.onmousemove = function(e) {
    // Get the current mouse position
    var r = canvas.getBoundingClientRect(),
        x = e.clientX - r.left, y = e.clientY - r.top;
    hover = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = map.length - 1, b; b = map[i]; i--) {
        if(x >= b.x && x <= b.x + b.w &&
           y >= b.y && y <= b.y + b.h) {
            // The mouse honestly hits the rect
            hover = true;
            id = i;
            break;
        }
    }
    // Draw the rectangles by Z (ASC)
    renderMap();
}
