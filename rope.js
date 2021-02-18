class Rope{
    constructor(bodyA,pointB){
        var opsions= {bodyA:bodyA,pointB:pointB,length:200,stiffness:0.2}
        this.rope=Constraint.create(opsions)
        World.add(MyWorld,this.rope)
        this.pointB=pointB
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        
        push();
          
        fill(0)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}