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
      loseGame()
  }
  else if(gameState === 4){
      winGame()
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
    //start of Jackson's Code
    fill(255,0,0);
    stroke(255, 0, 0)
    strokeWeight(10);
    noFill();
    ellipse(250+150, 250+150,400,400);
    line(100+150,400+150,325+150,50+150);
    line(325+150,50+150,325+150,450+150);
    line(235+150,250+150,320+150,250+150)
    //end of Jackson's Code
    //start of Geecu
    fill(255,0,0);
    const xDiff = (lastX - mouseX);
    const yDiff = (lastY - mouseY);
    const xScale = xDiff / 10;
    const yScale = xDiff / 10;
    const x = lerp(lastX, mouseX, .2);
    const y = lerp(lastY, mouseY, .2);
    const size = map(Math.abs(xDiff * yDiff), 0, width * height / 1000, 5, 100);
    ellipse(x - xScale, y - yScale, size, size);
    fill(0,255,255);
    ellipse(x + xScale, y + yScale, size, size);
    fill(255,255,255);
    ellipse(x, y, size, size);
  lastX = mouseX;
  lastY = mouseY;
    //
    stroke(0, 0, 0)
    strokeWeight(0);

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
         health = 3
         score = 0
         gameState = gameState + 1
   }
//medium
      fill(255,165,0);
      textSize(20);
      text("Press M for Medium", 325, 500);
      if (keyCode === 77) {
         loadThings(5);
         health = 4
         score = 0
         gameState = gameState + 1
     }
//hard
      fill(255,0 ,0 );
      textSize(20);
      text("Press H for Hard", 600, 500);
       if (keyCode === 72) {
         loadThings(10);
         health = 8
         score = 0
         gameState = gameState + 1
    }
//how to play
    fill(255, 100 ,0);
    textSize(20);
    text("The goal of the game is to keep as many balls in the air as you can.", 100, 625);
    text( "Once you lose all your balls, the game ends", 100, 650);
    text( "Score 30 points to win the game", 100, 675);
}

function playGame(){
      background(20,20,20);
      runObjects();
      if (health === 0) {
         gameState = gameState + 1
      }
      if (score >= 30) {
         gameState = gameState + 2
      }
    }

function loseGame(){
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
function winGame(){
    background(20,20,20);
    fill(0, 250, 0);
    textSize(32);
    text("Score: " + score, 650, 30);
    fill(250, 250, 250);
    textSize(100);
    text("You Won :)", 150, 300);
    fill(250, 250, 250);
    textSize(50);
    text("To restart, press R", 200, 600);
    if (keyCode === 82) {
      gameState = 1
    }
  }
