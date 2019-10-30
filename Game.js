class Game{
    constructor(){
        //this.running = false;
    }
    start(){
        let fps = 10;
        setInterval(() => this.loop(), 1000/fps);
    }

    stop(){
        //console.log("you are dead");
        
    }

    reset(){
        this.stop()
        candy = new Candy();
        player = new Player(32, 28);
    }

    loop(){
        this.logic();
        this.render();
        
    }

    logic(){
        //up key pressed when you aren't moving down and
        if (player.direction != "down" && player.direction != "up" && keysDown[38] && player.alive) {
            player.direction = "up";
            
        }
        //down key pressed
        if (player.direction != "up" && player.direction != "down" && keysDown[40] && player.alive) {
            player.direction = "down";
            
        }
        //left key pressed
        if (player.direction != "right" && player.direction != "left" && keysDown[37] && player.alive) {
            player.direction = "left";

        }
        //right key pressed
        if (player.direction != "left" && player.direction != "right" && keysDown[39] && player.alive){
            player.direction = "right";

        }
        
        //when player is dead and presses space game resets
        if(!player.alive && keysDown[32]){
            game.reset();
            
        }


        //keypressed = false
        keysDown = [];

        
        player.step();
        //when player is off screen in x
        

        //places the player x to 0 if it is 15
        player.x %= gridX*15;
        

        if(player.x == - gridX){
            player.x = canvas.width - player.sprite.width;
        }
        
        //when player is off-screen in y

        player.y %= gridY*17;
        
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
        keypressed = false;
        
    }

    render(){
        /**
         * tail length starts with 1 even without eating candy
         * so to make points accurate to the ammount candy eaten
         * remove one in lengt
        */ 
        let points = player.tail["length"];

        Renderer.clear();
        
        for(var tail of player.tail){
            tail.draw();
        }
        ctx.font = "10px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("score: " + points, 4, 10);
        candy.draw();
        player.draw();
        
        
    }
}