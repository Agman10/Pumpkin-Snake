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

const sprites = {
    player: FileLoader.importSprite('sprites/pumpkinFace.png'),
    tail: FileLoader.importSprite('sprites/pumpkin.png'),
    candy: FileLoader.importSprite('sprites/candy.png')
}