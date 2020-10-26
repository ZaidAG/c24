const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5=new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20)
    kingPig= new Villan(810,320);
    servantPig= new Villan(810,220);
    treesAreLogs= new Logs(810,280,300,PI/2);
    treesAreLog= new Logs(810,180,300,PI/2);
    treesAreLo= new Logs(760,120,150,PI/5);
    treesAreL= new Logs(870,120,150,-PI/5);
    angerIsTerrible= new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    kingPig.display();
    servantPig.display();
    treesAreLogs.display();
    treesAreLog.display();
    treesAreLo.display();
    treesAreL.display();
    angerIsTerrible.display();
}