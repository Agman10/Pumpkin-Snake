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
    sCandyRed: FileLoader.importSprite('sprites/sCandyRed.png'),
    sCandyGreen: FileLoader.importSprite('sprites/sCandyGreen.png'),
    sCandyOrange: FileLoader.importSprite('sprites/sCandyOrange.png'),
    sCandyYellow: FileLoader.importSprite('sprites/sCandyYellow.png'),
    sCandyPurple: FileLoader.importSprite('sprites/sCandyPurple.png'),
    lollipop: FileLoader.importSprite('sprites/lollipop.png'),
    candyCorn: FileLoader.importSprite('sprites/candyCorn.png')

}
