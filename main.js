canvas.setAttribute("id", "canvas");

var gridX
var gridY

/**
 * load the Game class
 */
var game = new Game();
/**
 * loads candy
 */
var candy

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
    if (keypressed) return

    keysDown[event.keyCode] = true;
    keypressed = true
    

})
window.onload = () => {
    canvas.width = player.sprite.width * 15;
    console.log(canvas.width);
    canvas.height = player.sprite.height * 17;
    console.log(canvas.height);
    console.log(canvas.width /15);
    console.log(canvas.height / 17);
    gridX = player.sprite.width
    gridY = player.sprite.height
    candy = new Candy();
    
    
    game.start();
}





let body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);