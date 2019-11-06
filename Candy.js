class Candy{
    constructor(){
        this.randomizePosition();
        this.sprite = [
            sprites.caramelRed,
            sprites.caramelGreen,
            sprites.caramelBlue,
            sprites.caramelPurple,
            sprites.mCandyRed,
            sprites.mCandyGreen,
            sprites.mCandyOrange,
            sprites.mCandyYellow,
            sprites.mCandyBlue,
            sprites.mCandyBrown,
            sprites.carWhite,
            sprites.carPink,
            sprites.carGreen,
            sprites.lollipopPink,
            sprites.lollipopBlack,
            sprites.lollipopBrown,
            sprites.candyCorn,
            sprites.geleHallon
            
            
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
        //console.log(this.sprite)
        this.random = Math.floor(Math.random() * this.sprite["length"])
    }

    draw(){
        Renderer.img(this.sprite[this.random], this.x, this.y);
        
    }
}