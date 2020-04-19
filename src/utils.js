function load_background(){
    console.log("hello from load back ground");
    let img = document.createElement("img");
    img.src = "https://i.ytimg.com/vi/4l6J5jhRgos/maxresdefault.jpg";
    console.log(img.src);
    let bdy = document.getElementById("mainDiv").appendChild(img);
    console.log(bdy);

};

function add_image(){
    const mainDiv = document.getElementById("mainDiv");
    const background_img = new Image();
    background_img.src = "imgs/background_img.jpg";
    background_img.onload = () => {
        
        mainDiv.appendChild(background_img, 0, 0);
    }
};

function display_coords_real_time(event_res, screen_position_display, ctx, canvas_width, canvas_height){
    /*
      event_res is object x, y, and screen_position_display where we display the results in real time. 
    */
    //ctx.clearRect(0, window.height - 100, 300,200);
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    //ctx.rect(0.5, BOT_SEPARATION_HEIGHT + 1, GAME_WIDTH, GAME_HEIGHT);
    let text = "" + event_res.x + " " + event_res.y
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(text, screen_position_display.x, screen_position_display.y);
    
};