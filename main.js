canvas.setAttribute("id", "canvas");

//website don't scroll when using arrow keys
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

var gridX
var gridY

/**
 * load the Game class
 */
var game = new Game();
/**
 * loads candy
 */
var candy;

/**
 * detects key presses
 */

var keysDown = [];

/**
 * when key is not pressed, used to check if key is
 * pressed so you can't go back too quickly
*/
var keypressed = false;

document.addEventListener("keydown", event => {
    if (keypressed) return;

    keysDown[event.keyCode] = true;
    keypressed = true;
    

})

//gives the html buttons keypresses
function upButton(){
    if (player.direction != "down" && player.direction != "up" && player.alive) {
        player.direction = "up";
    }
}
function leftButton(){
    if (player.direction != "right" && player.direction != "left" && player.alive) {
        player.direction = "left";

    }
}
function downButton(){
    if (player.direction != "up" && player.direction != "down" && player.alive) {
        player.direction = "down";
    }
}
function rightButton(){
    if (player.direction != "left" && player.direction != "right" && player.alive){
        player.direction = "right";
    }
}
function spaceButton(){
    if(!player.alive){
        game.reset();
    }
}


window.onload = () => {
    canvas.width = player.sprite.width * 15;
    //console.log(canvas.width);
    canvas.height = player.sprite.height * 17;
    /* console.log(canvas.height);
    console.log(canvas.width /15);
    console.log(canvas.height / 17); */
    gridX = player.sprite.width
    gridY = player.sprite.height
    candy = new Candy();
    
    
    game.start();
}





let body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);