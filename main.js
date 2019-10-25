/* var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d'); */
canvas.setAttribute("id", "canvas");

//10 grids
//canvas.width  = 160;
//canvas.height = 160;

//15 grids
canvas.width = player.sprite.width * 15;
console.log(canvas.width);
canvas.height = player.sprite.height * 17;
console.log(canvas.height);
/* canvas.width  = 240;
canvas.height = 240; */

console.log(canvas.width /15);
console.log(canvas.height / 17);
console.log(Math.floor(Math.random() * 3))
//20 grids
//canvas.width  = 320;
//canvas.height = 320;

/* const SCALE = 16;
const pumpkinWidth = 16;
const pumpkinHeight = 14; */
//var randomSprite = Math.floor(Math.random() * 3)
//console.log(randomSprite)
const gridX = player.sprite.width
const gridY = player.sprite.height

//console.log(canvas.width / gridX)

/**
 * load the Game class
 */
var game = new Game();
//var player = new Player(32, 28);
var candy = new Candy();
/**
 * detects key presses
 */

var keysDown = [];

//if (player.alive = true){

document.addEventListener("keydown", event => {
    if (!player.alive) return
    //console.log(event.keyCode)
    console.log("event code " + event.code)
    //when space is pressed it doesn't repeat. iit gets the name of the key
    if(!keysDown[event.keyCode]){
        document.dispatchEvent(new Event(event.code))
    }

    keysDown[event.keyCode] = true;

})
/* } if (player.alive = false) {
    console.log("can't move")
} */
/* document.addEventListener("keyup", event => {
    keysDown[event.keyCode] = false;
}) */

/**
 * loads the and loops, makes the game run
 */
window.onload = () => {
    //console.log("game")
    game.start();
}





let body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);