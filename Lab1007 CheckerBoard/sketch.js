//  Allison Smith
//  October 8, 2019
var squares = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadSquares();
  for (var i=0; i<squares.length; i++){
  squares[i].render();
  }
}

function loadSquares() {
x=0
for (var i=0; i<=8; i= i+2){
  squares[i] = new Square(x,0,250,0,0)
  x= x+200
  }
x=100
for (var i=1; i<=8; i= i+2){
  squares[i] = new Square(x,0,0,250,0)
  x= x+200
  }
}
