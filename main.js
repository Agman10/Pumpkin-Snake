let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.setAttribute("id", "canvas");
canvas.width  = 160;
canvas.height = 160;
const SCALE = 16;

console.log("width: " + canvas.width + " height: " + canvas.height)

// make it so every 16 pixels are one grid
/* let gwidth =  canvas.width /  16;
let gheight =  canvas.height /  16;
console.log("screen width: " + gwidth)
console.log("screen height: " + gheight) */

// give X and Y a grid position starting with 1
/* let screenX = canvas.width / gwidth
let screenY = canvas.height / gheight
let testX = 16;
console.log(testX) */

let posX = 0
let posY = 0

console.log("screenX size: " + screenX)
console.log("screenY size: " + screenY)
if(screenX > 10){
    console.log("too much")
}


/* let o = {x:posX,y:posY} */
function drawGrid(posX, posY){
    
    /* ctx.beginPath()
    ctx.moveTo(posX,posY)
    ctx.lineTo(posX+gwidth, posY);
    ctx.lineTo(posX+gwidth, posY+gheight);
    ctx.lineTo(posX, posY+gheight);
    ctx.lineTo(posX, posY); */
}

ctx.fillStyle = "#FF0000";
ctx.fillRect(posX*SCALE,0,16,16);

let body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);