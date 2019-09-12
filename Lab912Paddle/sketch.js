//  Allison Smith
//  September 11, 2019

var ball = []
var paddle = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadThings();
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20);
  runObjects();
}

function loadThings(){
  ball = new Ball(random(width/2), random(height/2), random (-5,5), random(-5,5), 1);
  paddle = new Paddle(random(width/2),725);
}

function runObjects(){
  ball.run();
  paddle.run();
}
