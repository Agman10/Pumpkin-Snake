FileLoader = new class FileLoader{
    constructor(){
    }

    importSprite(path){
        var sprite = new Image();
        sprite.src = path;
        console.log(sprite);
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
    caramelRed: FileLoader.importSprite('sprites/caramelRed.png'),
    caramelGreen: FileLoader.importSprite('sprites/caramelGreen.png'),
    caramelBlue: FileLoader.importSprite('sprites/caramelBlue.png'),
    mCandyRed: FileLoader.importSprite('sprites/mCandyRed.png'),
    mCandyGreen: FileLoader.importSprite('sprites/mCandyGreen.png'),
    mCandyOrange: FileLoader.importSprite('sprites/mCandyOrange.png'),
    mCandyYellow: FileLoader.importSprite('sprites/mCandyYellow.png'),
    mCandyBlue: FileLoader.importSprite('sprites/mCandyBlue.png'),
    mCandyBrown: FileLoader.importSprite('sprites/mCandyBrown.png'),
    lollipop: FileLoader.importSprite('sprites/lollipop.png'),
    candyCorn: FileLoader.importSprite('sprites/candyCorn.png')

}
