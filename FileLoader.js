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
    candy: FileLoader.importSprite('sprites/candy.png'),
    candyGreen: FileLoader.importSprite('sprites/candyGreen.png'),
    candyCorn: FileLoader.importSprite('sprites/candyCorn.png')

}
