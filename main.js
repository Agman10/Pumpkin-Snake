/* var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d'); */
canvas.setAttribute("id", "canvas");

//10 grids
//canvas.width  = 160;
//canvas.height = 160;

//15 grids
canvas.width  = 240;
canvas.height = 240;

//20 grids
//canvas.width  = 320;
//canvas.height = 320;

const SCALE = 16;
const pumpkinWidth = 16;
const pumpkinHeight = 14;

console.log("width: " + canvas.width / SCALE + " height: " + canvas.height / SCALE)
console.log("spritedfscgsdfg " + player.sprite.width)
console.log("spritedfscgsdfg " + player.sprite.height)

/**
 * load the Game class
 */
var game = new Game();
/**
 * detects key presses
 */
var keysDown = [];

//var candy = new Array()

document.addEventListener("keydown", event => {
    //console.log(event.keyCode)
    console.log("event code " + event.code)
    //when space is pressed it doesn't repeat. iit gets the name of the key
    if(!keysDown[event.keyCode]){
        document.dispatchEvent(new Event(event.code))
    }

    keysDown[event.keyCode] = true;
})

/* document.addEventListener("keyup", event => {
    keysDown[event.keyCode] = false;
}) */

/**
 * loads the and loops, makes the game run
 */
window.onload = () => {
    console.log("game")
    game.start();
}





let body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);