function draw() {
    var context;
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        context = canvas.getContext("2d");
    }

    canvas.onclick = function (e) {
    constructor(position_x,position_y,radius,color)
    {
        this.position_x = this.position_x
        this.position_y = this.position_y
    } 
}
class Player
{
    constructor(x,y,radius,color)
    {
        this.pos_x; = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.color = color;
    }
    draw()
    {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y,this.radius,0,2*Math.PI)
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}
var char_Player = new Player(100,100,30,"pink");
char_Player.draw(this.pos_x, this.pos_y,this.radius,0,2*Math.PI)