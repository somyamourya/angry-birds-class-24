class Bird{
    constructor(x, y) {
    
    var options={
    
        restitution:1,
        friction:0.3,
        density:1
    }
    
    this.body=Bodies.rectangle(x, y , 50,50,options);
    this.width=50;
    this.height=50;
    World.add(world,this.body);
    }
    
    display() {
    
        var pos=this.body.position.x=World.mousex;
        pos=this.body.position.y=World.mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("navy");
        strokeWeight(1);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
    
    };


