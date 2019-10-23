class Player{
        constructor(x, y){
        this.x = x;
        this.y = y;
        this.tail = new Array();
        this.sprite = sprites.player;
        this.direction = "right";
    }

    update(){
        
    }

    addTail(){
        var tail = new Tail(this.x, this.y)
        //up
        if(this.direction == "up") tail.y = this.y + this.sprite.height;
        //right
        if(this.direction == "right") tail.x = this.x - this.sprite.width; 
        //down
        if(this.direction == "down") tail.y = this.y - this.sprite.height;
        //left
        if(this.direction == "left") tail.x = this.x + this.sprite.width; 
        this.tail.push(tail)
        
        
    }

    move(x, y){
        this.x += x;
        this.y += y;
        //this.posY += 2;
    }

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

player = new Player(64, 32);