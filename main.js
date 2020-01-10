canvas.setAttribute("id", "canvas");

//website don't scroll when using arrow keys
window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
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


//touch controls
canvas.addEventListener('touchstart', event => {
    lastTouch = event;

});

var lastTouch
canvas.addEventListener('touchmove', event => {
    event.preventDefault()
    if (!player.alive) return
    var deltaX = lastTouch.changedTouches[0].clientX - event.changedTouches[0].clientX
    var deltaY = lastTouch.changedTouches[0].clientY - event.changedTouches[0].clientY
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0 && player.direction != "right") {
            player.direction = "left";
        } else if (player.direction != "left") {
            player.direction = "right";
        }
    }
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
        if (deltaY > 0 && player.direction != "down") {
            player.direction = "up";
        } else if (player.direction != "up") {
            player.direction = "down";
        }
    }

    //console.log("x" + event.changedTouches[0].clientX);
    //console.log("y" + event.changedTouches[0].clientY);
    lastTouch = event;

});

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
function spaceButton() {
    if (!player.alive) {
        game.reset();
    }
}

function changeSkin() {
    if (player.skin == 0) {
        player.skin = 1;
    } else if (player.skin == 1) {
        player.skin = 0;
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