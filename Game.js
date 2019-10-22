class Game{
    constructor(){
        this.running = false;
    }
    start(){
        /* document.addEventListener("ArrowLeft", () => {
            if(this.direction = 1){
                console.log("stop")
            }
        }) */
        /* logic.keysDown(function (event) {
        switch (event.keyCode){
            case 38:
                console.log("agsdfgsdfg")
                break;
        }
    }); */
        setInterval(() => this.loop(), 1000 / 60);
    }

    stop(){

    }

    loop(){
        this.logic();
        this.render();
    }

    logic(){
        //up key pressed when you aren't moving down
        if (player.direction != 2 && keysDown[38]) {
            //player.move(0, -1);
            console.log("up");
            player.direction = 0;
            console.log(player.direction)
            //player.step();
        }
        //down key pressed
        if (player.direction != 0 && keysDown[40]) {
            //player.move(0, 1);
            console.log("down");
            player.direction = 2;
            console.log(player.direction)
            //player.step();
        }
        //left key pressed
        if (player.direction != 1 && keysDown[37]) {
            //player.move(-1, 0);
            console.log("left");
            player.direction = 3;
            console.log(player.direction)
            
            //player.step();
        }
        //right key pressed
        if (player.direction != 3 && keysDown[39]){
            //player.move(1, 0);
            console.log("right");
            player.direction = 1;
            console.log(player.direction)
            //player.step();
            //ctx.fillRect(posX+2*SCALE, posY*SCALE ,16,16);
            //console.log(player.x)
        }
        keysDown = [];

        if (player.posX > canvas.width - SCALE){
            player.posX = 0;
        } else if(player.posX / SCALE < 0){
            player.posX = 240;
        }
        
        if (player.posY > canvas.height - SCALE){
            player.posY = 0;
        } else if(player.posY / SCALE < 0){
            player.posY = 240;
        }
    }

    render(){
        Renderer.clear();
        //ctx.fillRect(posX+2*SCALE, posY*SCALE ,16,16);
        //console.log(player)
        //Renderer.ctx.drawImage('sprites/pumpkinFace.png', 16, 16);
        player.draw();
        player.step();
        
        console.log("X: " + player.posX / SCALE + " Y: " + player.posY / SCALE)
    }
}