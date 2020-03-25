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
