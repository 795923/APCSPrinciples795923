//  Allison Smith
//  September 16, 2019

var ball = []
var paddle = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadThings(10);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20);
  runObjects();
}

function loadThings(n){
  for(var i=0; i < n; i++){
    ball[i] = new Ball(random(width), 0, random(-8,8), random(-8,8), 1);
  }
  paddle = new Paddle(random(width/2),725);
}

function runObjects(){
  for(var i = 0; i < ball.length; i++){
  ball[i].run();
  }
  paddle.run();
}
