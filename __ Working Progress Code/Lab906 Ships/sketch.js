//  Allison Smith
//  August 21, 2019
var ship = []
var mainBall = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(random(80, 120));
  loadship(random(80, 120));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20, 70);
  runBalls();
}

function loadBalls(n){
  mainBall = new Ball(random(width), random(height), random(-3,3), random(-3,3), -1);
}

function runBalls(){
  mainBall.run();

}

function draw() {
  background(20,20,20, 70);
  runship();
}

function loadship(n){
  ship = new ship(random(-3,3), random(-3,3), random(-3,3), random(-3,3), random(-3,3), random(-3,3));
}

function ship(){
  ship.run();

}
