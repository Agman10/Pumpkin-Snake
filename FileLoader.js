FileLoader = new class FileLoader{
    constructor(){
    }

    importSprite(path){
        var sprite = new Image();
        sprite.src = path;
        //console.log(sprite);
        return sprite;
    }

}
//list of sprites
var sprites = {
    player: FileLoader.importSprite('sprites/pumpkinFace.png'),
    playerLeft: FileLoader.importSprite('sprites/pumpkinFaceLeft.png'),
    playerRight: FileLoader.importSprite('sprites/pumpkinFaceRight.png'),
    playerUp: FileLoader.importSprite('sprites/pumpkinFaceUp.png'),
    playerDead: FileLoader.importSprite('sprites/pumpkinSad.png'),
    tail: FileLoader.importSprite('sprites/pumpkin.png'),
    caramelRed: FileLoader.importSprite('sprites/candy/caramelRed.png'),
    caramelGreen: FileLoader.importSprite('sprites/candy/caramelGreen.png'),
    caramelBlue: FileLoader.importSprite('sprites/candy/caramelBlue.png'),
    caramelPurple: FileLoader.importSprite('sprites/candy/caramelPurple.png'),
    mCandyRed: FileLoader.importSprite('sprites/candy/mCandyRed.png'),
    mCandyGreen: FileLoader.importSprite('sprites/candy/mCandyGreen.png'),
    mCandyOrange: FileLoader.importSprite('sprites/candy/mCandyOrange.png'),
    mCandyYellow: FileLoader.importSprite('sprites/candy/mCandyYellow.png'),
    mCandyBlue: FileLoader.importSprite('sprites/candy/mCandyBlue.png'),
    mCandyBrown: FileLoader.importSprite('sprites/candy/mCandyBrown.png'),
    carWhite: FileLoader.importSprite('sprites/candy/carWhite.png'),
    carPink: FileLoader.importSprite('sprites/candy/carPink.png'),
    carGreen: FileLoader.importSprite('sprites/candy/carGreen.png'),
    lollipopPink: FileLoader.importSprite('sprites/candy/lollipopPink.png'),
    lollipopBlack: FileLoader.importSprite('sprites/candy/lollipopBlack.png'),
    lollipopBrown: FileLoader.importSprite('sprites/candy/lollipopBrown.png'),
    candyCorn: FileLoader.importSprite('sprites/candy/candyCorn.png'),
    geleHallon: FileLoader.importSprite('sprites/candy/geleHallon.png'),


}
