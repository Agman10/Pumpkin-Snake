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
        setInterval(() => this.loop(), 10000 / 60);
    }

    stop(){

    }

    loop(){
        this.logic();
        this.render();
    }

    logic(){
 
        //up key pressed when you aren't moving down
        if (player.direction != "down" && player.direction != "up" && keysDown[38]) {
            //player.move(0, -1);
            //console.log("up");
            player.direction = "up";
            console.log(player.direction);
            //player.step();

        }

        //down key pressed
        if (player.direction != "up" && player.direction != "down" && keysDown[40]) {
            //player.move(0, 1);
            //console.log("down");
            player.direction = "down";
            console.log(player.direction);
            //player.step();


        }
        //left key pressed
        if (player.direction != "right" && player.direction != "left" && keysDown[37]) {
            //player.move(-1, 0);
            //console.log("left");
            player.direction = "left";
            console.log(player.direction);
            //player.step();

        }
        //right key pressed
        if (player.direction != "left" && player.direction != "right" && keysDown[39]){
            //player.move(1, 0);
            //console.log("right");
            player.direction = "right";
            console.log(player.direction)

            /* setTimeout(function(){
                console.log("timeout")
                keysDown = [];
            }, 2000); */
            //player.step();
            //ctx.fillRect(posX+2*SCALE, posY*SCALE ,16,16);
            //console.log(player.x)

            
            /* //tail position and direction
            tail.direction = "right";
            tail.x = player.x - tail.sprite.width;
            tail.y = player.y;



            //tail2 position and direction
            tail2.direction = "right";
            tail2.x = tail.x - tail.sprite.width;
            tail2.y = tail.y; */

        }
        /* setTimeout(function(){
            console.log("timeout")
        }, 2000); */
        keysDown = [];



        if (player.x / gridX > 14){
            player.x = 0;
            console.log(player.x/gridX)
        } else if(player.x <= - player.sprite.width){
            player.x = canvas.width - player.sprite.width;
        }
        
        if (player.y > 16 * player.sprite.height){
            player.y = 0;
        } else if(player.y <= - player.sprite.height){
            player.y = canvas.height - player.sprite.height;
        }
        /* //when player is off screen
        if (player.x >= canvas.width - player.sprite.width){
            player.x = 0;
        } else if(player.x / player.sprite.width <= 0){
            player.x = canvas.width - player.sprite.width;
        }
        
        if (player.y >= canvas.height - player.sprite.height){
            player.y = 0;
        } else if(player.y / player.sprite.height <= 0){
            player.y = canvas.height - player.sprite.height;
        } */


        /* //when tail is off screen
        if (tail.x >= canvas.width - tail.sprite.width){
            tail.x = 0;
        } else if(tail.x / tail.sprite.width <= 0){
            tail.x = canvas.width - tail.sprite.width;
        }
        
        if (tail.y >= canvas.height - tail.sprite.height){
            tail.y = 0;
        } else if(tail.y / tail.sprite.height <= 0){
            tail.y = canvas.height - tail.sprite.height;
        }



        //when tail2 is off screen
        if (tail2.x >= canvas.width - tail.sprite.width){
            tail2.x = 0;
        } else if(tail2.x / tail.sprite.width <= 0){
            tail2.x = canvas.width - tail.sprite.width;
        }
        
        if (tail2.y >= canvas.height - tail.sprite.height){
            tail2.y = 0;
        } else if(tail2.y / tail.sprite.height <= 0){
            tail2.y = canvas.height - tail.sprite.height;
        } */
    }

    render(){
        Renderer.clear();
        //ctx.fillRect(posX+2*SCALE, posY*SCALE ,16,16);
        //console.log(player)
        //Renderer.ctx.drawImage('sprites/pumpkinFace.png', 16, 16);
        /* tail.draw();
        tail.step();
        tail2.draw();
        tail2.step(); */
        player.addTail()
        for(var tail of player.tail){
            tail.draw();
        }
        
        player.draw();
        player.step();
        candy.draw();
        //console.log("x: " + tail.x + " y: " + tail.y)
        //console.log("X: " + player.x + " Y: " + player.y)
        
        console.log("X: " + player.x/gridX + " Y: " + player.y/gridY)
    }
}