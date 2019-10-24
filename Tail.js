class Tail{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.sprite = sprites.tail;
        this.direction = player.direction;
    }
    move(x, y){
        this.x += x * player.sprite.width;
        this.y += y * player.sprite.height;
    } 

    setPosition(x, y){
        this.lastX = this.x;
        this.lastY = this.y;
        this.x = x;
        this.y = y;
    }

    draw(){
        Renderer.img(this.sprite, this.x, this.y);
        //Renderer.img(this.sprite, player.x, player.y);
        //Renderer.rect(this.x + 4, this.y + 3, 6, 6, "lightblue");
        
    }
}

/* tail = new Tail(player.x - 16, player.y);
tail2 = new Tail(tail.x - 16, tail.y); */