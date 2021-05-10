const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gd, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    gd =new Ground(100,370,500,10);
    ball=new Ball(200,200,30);
    //console.log(gd);
}

function draw(){
    background(0);
    Engine.update(engine);
    gd.display();
 ball.display();
}   