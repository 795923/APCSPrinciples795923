//  Allison Smith
//  September 17, 2019

var ball = []
var paddle = []
var score = 0
var health = 10
var gameState = 1
var numOfBalls = 0
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // loadThings(numOfBalls);
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

function startGame(){
    background(20,20,20);
//title
    fill(250, 250, 250);
    textSize(100);
    text("Paddle Game", 100, 300);
//easy
      fill(0, 250, 0);
      textSize(20);
      text("Press E for Easy", 100, 500);
       if (keyCode === 69) {
         loadThings(3);
         gameState = gameState + 1
   }
//medium
      fill(255,165,0);
      textSize(20);
      text("Press M for Medium", 325, 500);
      if (keyCode === 77) {
         loadThings(5);
         gameState = gameState + 1
     }
//hard
      fill(255,0 ,0 );
      textSize(20);
      text("Press H for Hard", 600, 500);
       if (keyCode === 72) {
         loadThings(10);
         gameState = gameState + 1
    }
}

function playGame(){
      background(20,20,20);
      runObjects();
      // if (health === 0) {
      //   gameState = gameState + 1
      // }
    }

function endGame(){
  background(20,20,20);
  fill(250, 250, 250);
  textSize(100);
  text("You Lost :(", 200, 300);
}
