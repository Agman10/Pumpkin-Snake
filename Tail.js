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
        
    }
}