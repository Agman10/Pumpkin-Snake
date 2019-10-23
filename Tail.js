class Tail{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.sprite = sprites.tail;
        this.direction = player.direction;
    }
    /* move(x, y){
        this.x += x;
        this.y += y;
    } */

    /* step(){
        //up
        if(this.direction == "up") this.move(0, -1)
        //right
        if(this.direction == "right") this.move(1, 0)
        //down
        if(this.direction == "down") this.move(0, 1)
        //left
        if(this.direction == "left") this.move(-1, 0)
    } */

    draw(){
        Renderer.img(this.sprite, this.x, this.y);
        //Renderer.img(this.sprite, player.x, player.y);
        
    }
}

/* tail = new Tail(player.x - 16, player.y);
tail2 = new Tail(tail.x - 16, tail.y); */