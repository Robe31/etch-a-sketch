let player;

function startGame() {
    myGameArea.start();
    player = new component(25, 25, "black", 0,0)
}
let myGameArea = {
    screen : document.querySelector('#screen'),
    canvas : document.createElement('canvas'),
    start : function() {
        this.canvas.width = 780;
        this.canvas.height = 400;
        this.context = this.canvas.getContext('2d');
        this.screen.appendChild(this.canvas);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    let gamePeice = myGameArea.context;
    gamePeice.fillStyle = color;
    gamePeice.fillRect(this.x, this.y, this.width, this.height)
}

