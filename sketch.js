const Engine=Matter.Engine 
const World=Matter.World
const Bodies= Matter.Bodies
const Constraint=Matter.Constraint
var MyWorld,MyEngine 

function setup(){
    canvas = createCanvas(800,600);
MyEngine = Engine.create()
MyWorld= MyEngine.world;
    //create 4 different surfaces
ground=new Ground(400,580,800,20)
box1=new Box(650,100,70,50)
box2=new Box(650,100,70,50)
box3=new Box(650,100,70,50)
box4=new Box(650,100,70,50)
box5=new Box(650,100,70,50)
box6=new Box(650,100,70,50)
box7=new Box(650,100,70,50)
ball=new Ball(200,200,80,80)
rope1=new Rope(ball.body,{x:500,y:100})
    //create box sprite and give velocity

}

function draw() {
    background(169,169,169);
    Engine.update(MyEngine)
    //create edgeSprite
ground.display();
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()

ball.display()
rope1.display()
    //add condition to check if box touching surface and make it box
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}