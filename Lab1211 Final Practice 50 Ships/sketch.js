//  Allison Smith
//  December 3, 2019
var ship = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadThings();
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20, 70);
  runObjects();
}

function loadThings(){
  planet = new Planet(random(width/2), random(height/2), random (-5,5), random(-5,5));
  for(var i=0; i<=49; i++){
    ship[i]=new Ship(random(width), random(height), random (-1,1), random(-1,1));
  }
}

function runObjects(){
  planet.run();
  for(var i = 0; i < ship.length; i++){
    ship[i].run();
  }
}
