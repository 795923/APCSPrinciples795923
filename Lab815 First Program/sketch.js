//  Allison Smith
// 	August 15, 2019
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(20,100,20);
  triangle(100,300,400,50,400,300);
  fill(20,100,20);
  triangle(100,500,400,200,400,500);
  fill(20,100,20);
  triangle(100,700,400,400,400,700);
  fill(120,20,0);
  ellipse(400,400,400,400);
  fill(200,20,20);
  ellipse(400,400,300,300);
  fill(20,80,200);
  ellipse(400,400,200,200);
  fill(0,250,250);
  rect(0,0,50,50);
  fill(0,250,250);
  rect(0,750,50,50);
  fill(0,250,250);
  rect(750,0,50,50);
  fill(0,250,250);
  rect(750,750,50,50);
}
