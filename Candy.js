class Candy{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.sprite = sprites.candy;
    }

    draw(){
        Renderer.img(this.sprite, this.x, this.y);
        
    }
}

candy = new Candy(128, 128)