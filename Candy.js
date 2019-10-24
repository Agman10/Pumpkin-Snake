class Candy{
    constructor(){
        /* this.x = x;
        this.y = y; */
        this.randomizePosition()
        this.sprite = sprites.candy;
    }

    randomizePosition(){
        this.x = Math.floor(Math.random() * 15) * gridX;
        this.y = Math.floor(Math.random() * 17) * gridY;
    }

    /* newCandy(){
        var candy = new Candy(this.x, this.y)
        this.candy.push(candy)
    }  */

    draw(){
        Renderer.img(this.sprite, this.x, this.y);
        
    }
}
//candy = new Candy(candy.x, candy.y)
/* var candy = new Candy(128, 112) */