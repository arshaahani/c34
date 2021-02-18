class Ball{
    constructor(x,y,width,height){
        var opsions= {restitution:0.8,density:2}
        this.body=Bodies.rectangle(x,y,width,height,opsions)
        World.add(MyWorld,this.body)
        this.width=width
        this.height=height
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(0)
        ellipse(0,0,this.width,this.height)
        pop()
    }
}