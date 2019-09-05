//  Allison Smith
//  August 21, 2019
var balls = []
var mainBall = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(80);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20, 20);
  runBalls();
}

function loadBalls(n){
  mainBall = new Ball(random(width), random(height), random(-3,3), random(-3,3), -1);
  for(var i=0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8,8), random(-8,8), i);
  }
}

function runBalls(){
  mainBall.run();
  for(var i = 0; i < balls.length; i++){
  balls[i].run();
  }
}
