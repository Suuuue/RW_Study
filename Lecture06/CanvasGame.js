const canvas = document.getElementById('canvas');
var context =canvas.getContext('2d');

var fps = 60;
setInterval(render,1000/fps);
player p = new player(canvas.weight/2, canvas.height/2, 20,"skyblue");

function render()
{       any
    context.clearRect(0,0, cnavs.Width, canvas.weight);
}




canvas.onclick = function(event){
    const x = event.clientX - context.canvas.offsetLeft;
    const y = event.clientY - context.canvas.offsetTop;
    es.push(new Enemy(x,y));
    es[es.length-1].draw();
    console.log(es);
}

class player{
    constructor(x,y,r,c){
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.c
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }
}

var p = new player(450,450,50, "yellow");
p.draw();
var es = new Array();

class Enemy{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    draw() {
      context.beginPath();
      context.fillStyle = "violet"
      context.rect(this.x, this.y, 50, 50)
      context.fill();
      context.closePath();
    }    
}

class bullet
{
    constructor(position_x,position_y,destination_x,destination_y,radius,color, speed)
}
