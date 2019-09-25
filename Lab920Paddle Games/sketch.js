//  Allison Smith
//  September 25, 2019

var ball = []
var paddle = []
var score = 0
var health = 3
var gameState = 1
var numOfBalls = 0
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
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

//creates balls and paddle
function loadThings(n){
  for(var i=0; i < n; i++){
    ball[i] = new Ball(random(width), 0, random(-8,8), random(-8,8), i);
  }
  paddle = new Paddle(random(width/2),725);
}

//runs the ball and paddle classes
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
         health = 4
         gameState = gameState + 1
     }
//hard
      fill(255,0 ,0 );
      textSize(20);
      text("Press H for Hard", 600, 500);
       if (keyCode === 72) {
         loadThings(10);
         health = 8
         gameState = gameState + 1
    }
//how to play
    fill(255, 100 ,0);
    textSize(20);
    text("The goal of the game is to keep as many balls in the air as you can.", 100, 650);
    text( "Once you lose all your balls, the game ends", 100, 700);
}

function playGame(){
      background(20,20,20);
      runObjects();
      if (health === 0) {
         gameState = gameState + 1
      }
    }

function endGame(){
  background(20,20,20);
  fill(0, 250, 0);
  textSize(32);
  text("Score: " + score, 650, 30);
  fill(250, 250, 250);
  textSize(100);
  text("You Lost :(", 150, 300);
  fill(250, 250, 250);
  textSize(50);
  text("To restart, press R", 200, 600);
  if (keyCode === 82) {
    gameState = 1
  }
}
