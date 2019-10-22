class Player{
        constructor(x, y){
        this.posX = x;
        this.posY = y;
        this.tail = new Array();
        this.sprite = sprites.player;
        this.direction = 1;
    }

    update(){
        /* for (this.direction = 1){

        } */
    }

    move(x, y){
        this.posX += x;
        this.posY += y;
        //this.posY += 2;
    }

    step(){
        //up
        if(this.direction == 0) this.move(0, -1)
        //right
        if(this.direction == 1) this.move(1, 0)
        //down
        if(this.direction == 2) this.move(0, 1)
        //left
        if(this.direction == 3) this.move(-1, 0)
    }

    draw(){
        Renderer.img(this.sprite, this.posX, this.posY);
        
    }
}

player = new Player(32, 32);