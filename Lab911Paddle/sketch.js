//  Allison Smith
//  September 11, 2019

var paddle = []
var mainBall = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadThings(1);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20, 70);
  runObjects();
}

function loadThings(){
  mainBall = new Ball(random(width/2), random(height/2), random (-5,5), random(-5,5), 1);
  paddle = new Paddle(random(width/2), random(height/2), random (-100,100), random(-100,100));
}

function runObjects(){
  mainBall.run();
  paddle.run();
}
