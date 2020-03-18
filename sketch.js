const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1 ;
/*var wall1 ;
var wall2 ;
var wall3 ;
var wall4 ;
var wall5 ;*/

function setup() {
 var canvas =  createCanvas(400,400);
engine = Engine.create();
 world = engine.world;


// wall = new Wall (200,320,140,100);
 wall1 = new Wall (100,290,60,160);
 wall2 = new Wall (300,290,60,160);   
 wall3 = new Wall (200,185,60,170);
 wall4 = new Wall (38.5,225,60, 290);  
 wall5 = new Wall (361,225,60,290);
 wall6 = new Wall (200,320,140,100);


}

function draw() {
  background("green");  

Engine.update(engine);

triangle(200,30,169,100,231,100);
fill("blue");

triangle(100,150,70,210,130,210);
fill("blue");

triangle(300,150,269,210,331,210);
fill("red");

triangle(40,10,10,80,70,80);
fill("red");

triangle(360,10,330,80,390,80);
fill("yellow");


//wall.display();
wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();



//drawSprites();
}