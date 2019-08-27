//  Allison Smith
//  August 21, 2019
var b1, b2;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  b1 = new Ball (random(width), random(height), random(-5,5), random(-5,5))
  b2 = new Ball (random(width), random(height), random(-5,5), random(-5,5))
  b3 = new Ball (random(width), random(height), random(-5,5), random(-5,5))

}

//  The draw function is called @ 30 fps
function draw() {
  b1.run();
  b2.run();
  b3.run();

}
