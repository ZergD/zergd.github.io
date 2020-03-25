function load_background(){
    console.log("hello from load back ground");
    let img = document.createElement("img");
    img.src = "https://i.ytimg.com/vi/4l6J5jhRgos/maxresdefault.jpg";
    console.log(img.src);
    let bdy = document.getElementById("mainDiv").appendChild(img);
    console.log(bdy);

};
