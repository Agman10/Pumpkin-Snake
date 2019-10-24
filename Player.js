class Player{
        constructor(x, y){
        this.x = x;
        this.y = y;
        this.tail = new Array();
        this.sprite = sprites.player;
        this.direction = "right";
    }

    update(){
        for(let i in this.tail){
            //console.log(this.tail[i])
            
            /* nextX = this.tail[i].x;
            nextY = this.tail[i].y; */

            
            if(i == 0){
                this.tail[i].setPosition(this.x, this.y);
                
            }
            
            else{
                let lastTail = this.tail[i-1];

                //console.log(this.tail[i])
                this.tail[i].setPosition(lastTail.lastX, lastTail.lastY);
            }
            
            //when tail is off-screen in x
            if (this.tail[i].x / gridX > 14){
                this.tail[i].x = 0;
                //console.log(this.tail[i].x % gridX);
            } else if(this.tail[i].x <= - gridX){
                this.tail[i].x = canvas.width - player.sprite.width;
            }

            //when tail is off-screen in y
            if (this.tail[i].y / gridY > 16){
                this.tail[i].y = 0;
                //console.log(this.tail[i].y % gridY)
            } else if(this.tail[i].y <= - gridY){
                this.tail[i].y = canvas.height - player.sprite.height;
            }

            //while(i > 0){
                /* if (this.tail[1].x == this.x){
                console.log("live")
                } else if (this.tail[1].x == this.x){
                    console.log("die")
                } */
            //}
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
        if(this.direction == "up") this.move(0, -1)
        //right
        if(this.direction == "right") this.move(1, 0)
        //down
        if(this.direction == "down") this.move(0, 1)
        //left
        if(this.direction == "left") this.move(-1, 0)
    }

    draw(){
        Renderer.img(this.sprite, this.x, this.y);
        
    }
}

player = new Player(32, 28);