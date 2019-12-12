//  Allison Smith
//  December 12, 2019
var ship = []
var sliderLimit, sliderAttract, sliderLimitText, sliderAttractText

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  //slider text
  sliderLimitText = createP("Limit")
  sliderLimitText.position(200, 450)
  //slider for limit
  sliderLimit = createSlider(1, 10, 1);
  sliderLimit.position(200, 500);
  //slider text
  sliderAttractText = createP("Attract")
  sliderAttractText.position(200, 350)
  //slider for limit
  sliderAttract = createSlider(0, 5, 1);
  sliderAttract.position(200, 400);
  loadThings();
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20, 70);
  runObjects();
}

function loadThings(){
  planet = new Planet(random(width/2), random(height/2), random (-5,5), random(-5,5));
  for(var i=0; i<=30; i++){
    ship[i]=new Ship(random(width), random(height), random (-1,1), random(-1,1));
  }
}

function runObjects(){
  planet.run();
  for(var i = 0; i < ship.length; i++){
    ship[i].run();
  }
}
