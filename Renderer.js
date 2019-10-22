//var canvas = document.getElementById("canvas");
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

Renderer = new class Renderer{
    constructor(){   
        this.canvas = canvas;
        this.ctx = ctx;
        
    }

    rect(x, y, width, height, color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    img(src, x, y){
        this.ctx.drawImage(src, x, y);
    }
    
    clear(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}


