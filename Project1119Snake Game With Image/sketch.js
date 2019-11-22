//  Allison Smith
//  November 15, 2019

var gameState = 1
var w = 10

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  // slow down snake movement
  frameRate(10);
  appleImg = loadImage("apple2.png");
  snakeHeadUp = loadImage("headUp.png");
  snakeHeadDown = loadImage("headDown.png");
  snakeHeadLeft = loadImage("headLeft.png");
  snakeHeadRight = loadImage("headUp - Copy (2).png");
  snakeBody = loadImage("body.png")
}

//creates snake and food
function loadThings(){
    snake = new Snake(400, 400);
    food = new Food(Math.floor(random(0,800/w))*w,Math.floor(random(0,800/w))*w);
}

function checkEdges(){
  //checks edges
    if(snake.head.x<0||snake.head.x>=width||snake.head.y<0 || snake.head.y>=height){
      gameState = 3
    }
  //checks snake hitting snake
    for(var i = snake.body.length-1; i >= 0; i--)
      if(snake.head.x === snake.body[i].x &&
        snake.head.y === snake.body[i].y){
          gameState = 3
        }
}

//runs food and snake code
function runThings(){
  food.run();
  snake.run();
}

//each gamestate start code
function draw(){
  background(5,5,5);
    if(gameState === 1){
      startGame()
    }
    else if(gameState === 2){
        playGame()
    }
    else if(gameState === 3){
        loseGame()
    }
  }

//opening screen
  function startGame(){
      background(20,20,20);
  //title
      fill(250, 250, 250);
      textSize(100);
      text("Snake Game", 100, 300);
  //easy
        fill(0, 250, 0);
        textSize(20);
        text("Press E for Easy", 100, 500);
         if (keyCode === 69) {
           frameRate(10);
           w=40
           loadThings();
           gameState = gameState + 1
     }
  //medium
        fill(255,165,0);
        textSize(20);
        text("Press M for Medium", 325, 500);
        if (keyCode === 77) {
           frameRate(15);
           w=20
          loadThings();
          gameState = gameState + 1
       }
  //hard
        fill(255,0 ,0 );
        textSize(20);
        text("Press H for Hard", 600, 500);
         if (keyCode === 72) {
           frameRate(20);
           w=10
           loadThings();
           gameState = gameState + 1
      }
  //how to play
      fill(255, 100 ,0);
      textSize(20);
      text("The goal of the game is to become as long of a snake as you can.", 100, 625);
      text( "If you hit one part of your snake with anohter, the game ends.", 100, 650);
      text( "Beat your own highscore to win the game.", 100, 675);
  }

//gameplay screen
  function playGame(){
      background(20,20,20);
      runThings();
      checkEdges();
    }

//lose screen
function loseGame(){
    background(250,0,0);
//score
    fill(0, 250, 0);
    textSize(32);
    text("Score: " + snake.body.length, 650, 50);
//lose
    fill(250, 250, 250);
    textSize(100);
    text("Try Again", 175, 300);
//restart
    fill(250, 250, 250);
    textSize(50);
    text("To restart, press R", 200, 600);
    if (keyCode === 82) {
      gameState = 1
    }
  }
