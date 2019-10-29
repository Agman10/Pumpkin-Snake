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
        
        //let fps = 6;
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
        //up key pressed when you aren't moving down and
        if (player.direction != "down" && player.direction != "up" /* && !keypressed */ && keysDown[38]) {
            player.direction = "up";
            //console.log(player.direction);
            //keypressed = true
            
        }
        //down key pressed
        if (player.direction != "up" && player.direction != "down" /* && !keypressed */ && keysDown[40]) {
            player.direction = "down";
            //console.log(player.direction);
            //keypressed = true
            
        }
        //left key pressed
        if (player.direction != "right" && player.direction != "left" /* && !keypressed */ && keysDown[37]) {
            player.direction = "left";
            //console.log(player.direction);
            //keypressed = true
        }
        //right key pressed
        if (player.direction != "left" && player.direction != "right" /* && !keypressed */ && keysDown[39]){
            player.direction = "right";
            //console.log(player.direction)

            //keypressed = true
        }


        //keypressed = false
        keysDown = [];

        
        player.step();
        //when player is off screen in x
        

        //places the player x to 0 if it is 15
        player.x %= gridX*15
        
        /* if (player.x / gridX > 14){
            player.x = 0;
            
        }*/
        if(player.x == - gridX){
            player.x = canvas.width - player.sprite.width;
        }
        
        //when player is off-screen in y

        player.y %= gridY*17
        
        /* if (player.y / gridY > 16){
            player.y = 0;
            
        }  */
        if(player.y == - gridY){
            player.y = canvas.height - player.sprite.height;
        }

        
    
        //when player eats a candy
        if(player.x == candy.x && player.y == candy.y){
            player.addTail();
            candy.randomizePosition()
            candy.randomizeSprite();
        }
        
        player.update();
        keypressed = false
        
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
        }
        ctx.font = "10px Arial";
        ctx.fillStyle = "white"
        ctx.fillText("score: " + points, 4, 10);
        candy.draw();
        player.draw();
        
    }
}