//  Allison Smith
//  August 21, 2019
var balls = []
var mainball = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(random(0, 80));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20, 20);
  runBalls();
}

function loadBalls(n){
  mainball = new Ball(50, 50, 8, 8);
  for(var i=0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8,8), random(-8,8));
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
  balls[i].run();
  }
}