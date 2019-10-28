class Player{
        constructor(x, y){
        this.x = x;
        this.y = y;
        this.tail = new Array();
        this.sprite = sprites.player;
        //this.spriteDead = sprites.playerDead;
        this.direction = "right";
        this.alive = true;
    }

    update(){
        for(let i in this.tail){
            // when player doesn't have any points
            if(i == 0 && this.direction == "up"){
                this.tail[i].setPosition(this.x, this.y + gridY);
                
            } else if(i == 0 && this.direction == "down"){
                this.tail[i].setPosition(this.x, this.y - gridY);
                
            } else if(i == 0 && this.direction == "left"){
                this.tail[i].setPosition(this.x + gridX, this.y);
                
            } else if(i == 0 && this.direction == "right"){
                this.tail[i].setPosition(this.x - gridX, this.y);
                
            }  /* else if(i == 0 && this.direction == "none"){
                //this.tail.push(tail)
                this.tail[i].setPosition(this.tail[i].x, this.tail[i].y);
                
            }   */
            /* if(i == 0){
                this.tail[i].setPosition(this.x, this.y);
            } */

            //when player has 1 or more points
            else{
                let lastTail = this.tail[i-1];
                //let lastY = this.y[i-1];
                //console.log(this.tail[i])
                this.tail[i].setPosition(lastTail.lastX, lastTail.lastY);
                //console.log(lastX)
                //console.log(lastY)
            } 
            
            //when tail is off-screen in x
            if (this.tail[i].x / gridX > 14){
                this.tail[i].x = 0;
                //console.log(this.tail[i].x % gridX);
            } else if(this.tail[i].x == - gridX){
                this.tail[i].x = canvas.width - player.sprite.width;
            }

            //when tail is off-screen in y
            if (this.tail[i].y / gridY > 16){
                this.tail[i].y = 0;
                //console.log(this.tail[i].y % gridY)
            } else if(this.tail[i].y == - gridY){
                this.tail[i].y = canvas.height - player.sprite.height;
            }

            //if player touches the tail
            /* while(player.x == -16){
                if (this.tail[i].x == canvas.width - gridX){
                    console.log("diueee")
                }
            } */
             if (this.tail[i].x == this.x && this.tail[i].y == this.y){
                //console.log("die")
                //this.die = true;
                this.die();
                
            } 
        
            //if candy spawns in a tail
            if (this.tail[i].x == candy.x && this.tail[i].y == candy.y){
                candy.randomizePosition();
                console.log("new postition")
            }
        }
    }

    addTail(){
        var tail = new Tail(this.x, this.y)
        //up
        if(this.direction == "up") tail.y = this.y /* + this.sprite.height; */
        //right
        if(this.direction == "right") tail.x = this.x /* - this.sprite.width;  */
        //down
        if(this.direction == "down") tail.y = this.y /* - this.sprite.height; */
        //left
        if(this.direction == "left") tail.x = this.x /* + this.sprite.width;  */
         
        //if(this.direction == "none") tail.x = this.x
        this.tail.push(tail)
        
        
    }

    // moves sprite.width is 1 grid
    move(x, y){
        this.x += x * this.sprite.width;
        this.y += y * this.sprite.height;
        //this.posY += 2;
    }

    // if player is in a direction it moves to specified direction
    step(){
        //up
        if(this.direction == "up"){
            this.sprite = sprites.playerUp;
            this.move(0, -1)
        } 
        //right
        if(this.direction == "right"){
            this.sprite = sprites.playerRight;
            this.move(1, 0)
        }
        //down
        if(this.direction == "down"){
            this.sprite = sprites.player;
            this.move(0, 1)
        } 
        //left
        if(this.direction == "left"){
            this.sprite = sprites.playerLeft;
            this.move(-1, 0)
        } 

        //if(this.direction == "none") this.move(0, 0)
    }

    //when player dies
    die(){
        this.alive = false;
        console.log("dieeeee")
        this.direction = "none"
        console.log(this.direction)
        
        player.sprite = sprites.playerDead;
        
        //this.tail.reduce(tail)
        game.stop();
    }
    draw(){
        Renderer.img(this.sprite, this.x, this.y);
        if(!this.alive){
            ctx.font = "20px Arial";
            ctx.fillStyle = "red"
            ctx.fillText("Game Over", gridX * 4, gridY * 7);
        }
        
    }
}

player = new Player(32, 28);