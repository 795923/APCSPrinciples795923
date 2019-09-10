//  Allison Smith
//  August 21, 2019
var ship = []
var mainBall = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadThings(random(80, 120));
  // loadShip(random(80, 120));
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20, 70);
  runObjects();
  // ship.run();

}

function loadThings(x){
  mainBall = new Ball(random(width/2), random(height/2), random (-5,5), random(-5,5), 1);
  for(var i = 0; i < x; i++){
  ship[i]=new Ship(random(width), random(height), random (-1,1), random(-1,1), i+3);
}
}

function runObjects(){
  mainBall.run();

  for(var i = 0; i < ship.length; i++){
    ship[i].run();
}
}
// function draw() {
//   background(20,20,20, 70);
//   runship();
// }

// function loadship(n){
//   // ship = new Ship(random(-3,3), random(-3,3), random(-3,3), random(-3,3), random(-3,3), random(-3,3));
// }
//
// function ship(){
//   // ship.run();
//
// }
