//  Allison Smith
// 	August 19, 2019

var x,y;
var speedX, speedY;

function setup() {
  x=100
  y=200
  speedX= 5
  speedY=-2
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  x=x+speedX
  y=y+speedY
  fill(20,100,20);
  triangle(x,y+100,400,50,400,300); //top green triangle
  fill(20,100,20);
  triangle(x,y+300,400,200,400,500); //middle green triangle
  fill(20,100,20);
  triangle(x,y+500,400,400,400,700); //bottom green triangle
  fill(120,20,0);
  ellipse(400,400,400-x,400); //biggest red circle
  fill(200,20,20);
  ellipse(400,400,300,300+y); //middle red circle
  fill(20,80,200);
  ellipse(400,400,200,200-y); //smallest blue circle
  fill(0,250,250);
  rect(0,0,50,50); //top left square
  fill(0,250,250);
  rect(0,750,50,50); // bottom left square
  fill(0,250,250);
  rect(750,0,50,50); //top right square
  fill(0,250,250);
  rect(750,750,50,50); //bottom right square
}
