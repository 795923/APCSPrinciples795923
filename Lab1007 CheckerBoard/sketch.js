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
  squares[0] = new Square(0,0,250,0,0)
  squares[1] = new Square(100,0,0,250,0)
}
