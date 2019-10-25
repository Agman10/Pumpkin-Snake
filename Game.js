class Game{
    constructor(){
        this.running = false;
    }
    start(){
        //player.addTail();
        //candy.newCandy();
        //console.log("tails: " + player.tail["length" - 1])
        //candy.newCandy();
        let fps = 6;
        //if(player.dead == false){
        setInterval(() => this.loop(), 1000/fps);
        //}
        
        //var candy = new Candy(candy.x, candy.y)
    }

    stop(){
        let fps = 6;
        //setInterval(() => {
        //clearInterval(this.render())
        console.log("you are dead");
        //setInterval(() => {
            //ctx.fillStyle = 'black';
            //ctx.fillRect(0, 0, 250, 250);
            //Renderer.clear();
        //}, 1000/fps);
        //Renderer.clear();
        //}, 1000/fps);
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
            //console.log(player.direction);
            //player.step();
        }
        //down key pressed
        if (player.direction != "up" && player.direction != "down" && keysDown[40]) {
            //player.move(0, 1);
            //console.log("down");
            player.direction = "down";
            //console.log(player.direction);
            //player.step();
        }
        //left key pressed
        if (player.direction != "right" && player.direction != "left" && keysDown[37]) {
            //player.move(-1, 0);
            //console.log("left");
            player.direction = "left";
            //console.log(player.direction);
            //player.step();
        }
        //right key pressed
        if (player.direction != "left" && player.direction != "right" && keysDown[39]){
            //player.move(1, 0);
            //console.log("right");
            player.direction = "right";
            //console.log(player.direction)
        }

        keysDown = [];


        //when player is off screen in x
        if (player.x / gridX > 14){
            player.x = 0;
            //console.log(player.x % gridX)
        } else if(player.x <= - gridX){
            player.x = canvas.width - player.sprite.width;
        }
        
        //when player is off-screen in y
        if (player.y / gridY > 16){
            player.y = 0;
        } else if(player.y <= - gridY){
            player.y = canvas.height - player.sprite.height;
        }

        //when player eats a candy
        if(player.x == candy.x && player.y == candy.y){
            player.addTail();
            candy.randomizePosition()
            //candy.randomizeSprite();
            //console.log(player.tail)
        } 

        


        //when player hits the tail

        /* if (player.x == tail.x && player.y == tail.y){
            console.log("DIE!")
        } */
    }

    render(){
        /**
         * tail length starts with 1 even without eating candy
         * so to make points accurate to the ammount candy eaten
         * remove one in lengt
        */ 
        let points = player.tail["length"]//-1

        Renderer.clear();
        
        for(var tail of player.tail){
            tail.draw()
            //console.log(player.tail["length"]-1)
            //tail.setPosition();
            //tail.step() 
        }
        ctx.font = "10px Arial";
        ctx.fillStyle = "white"
        ctx.fillText("score: " + points, 4, 10);
        candy.draw();
        player.draw();
        player.step();
        player.update();
        console.log(candy.randomSprite)

        /* if(!player.alive){
        ctx.font = "20px Arial";
        ctx.fillStyle = "red"
        ctx.fillText("Game Over", gridX * 4, gridY * 7);
        } */

        //write the score
        


        //candy.newCandy()
        //console.log(candy.newCandy())
        //console.log("x: " + tail.x + " y: " + tail.y)
        //console.log("X: " + player.x + " Y: " + player.y)
        //console.log(tail)

        //console.log("X: " + player.x/gridX + " Y: " + player.y/gridY)
    }
}