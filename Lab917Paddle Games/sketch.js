//  Allison Smith
//  September 17, 2019

var ball = []
var paddle = []
var score = 0
var health = 3
var gameState = 1
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadThings(10);
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    startGame()
  }
  else if(gameState === 2){
      playGame()
  }
  else if(gameState === 3){
      endGame()
  }
}

function loadThings(n){
  for(var i=0; i < n; i++){
    ball[i] = new Ball(random(width), 0, random(-8,8), random(-8,8), i);
  }
  paddle = new Paddle(random(width/2),725);
}

function runObjects(){
  for(var i = 0; i < ball.length; i++){
  ball[i].run();
  }
  paddle.run();
}
function playGame(){
  background(20,20,20);
}

function startGame(){
    runObjects();
}
