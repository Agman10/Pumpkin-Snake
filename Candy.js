class Candy{
    constructor(){
        this.randomizePosition();
        this.sprite = [
            sprites.candy,
            sprites.candyGreen,
            sprites.candyCorn
        ]
        this.randomizeSprite();
    }

    randomizePosition(){
        this.x = Math.floor(Math.random() * 15) * gridX;
        this.y = Math.floor(Math.random() * 17) * gridY;
    }

    /**
     * gives random a random number in candy sprite
     */
    randomizeSprite(){
        this.random = Math.floor(Math.random() * this.sprite["length"])
    }

    draw(){
        Renderer.img(this.sprite[this.random], this.x, this.y);
        
    }
}
//candy = new Candy(candy.x, candy.y)
/* var candy = new Candy(128, 112) */