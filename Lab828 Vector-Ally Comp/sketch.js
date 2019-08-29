//  Allison Smith
//  August 21, 2019
var balls = []
var box = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(random(0,50));
  loadBox(random(0,50));
}

//  The draw function is called @ 30 fps
function draw() {
  background(200,0,0, 50);
  //background(20,20,20);
  runBalls();
  runBox();
}

function loadBalls(n){
  for(var i=0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8,8), random(-8,8));
  }
}

function loadBox(n){
  for(var i=0; i < n; i++){
    box[i] = new Box(10,10,10,10);
    //box[i] = new Box(random(width), random(height), random(-8,8), random(-8,8));
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
  balls[i].run();
  }
}

function runBox(){
  for(var i = 0; i < box.length; i++){
  box[i].run();
  }
}
