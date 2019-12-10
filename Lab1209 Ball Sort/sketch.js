//  Allison Smith
// 	December 9, 2019
var balls = [];
var colors = [];
var numBalls = 20;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i=0; i < numBalls; i++){
      balls[i] = new Ball(i*40,150);
    }
  for (j=0; j<numBalls-1; j++){
    for (i=0; i<numBalls-1-j; i++){
      if (balls[i+1].redClr < balls[i].redClr) {
        var tmp = balls[i].redClr;
        balls[i].redClr = balls[i+1].redClr;
        balls[i+1].redClr = tmp;
      }
    }
  }
}

function draw(){
  for(var i=0; i < numBalls; i++){
    balls[i].render();
    }
  }
