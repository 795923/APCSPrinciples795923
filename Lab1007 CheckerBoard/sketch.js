//  Allison Smith
//  October 10, 2019
var squares = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadSquares();
}

function loadSquares() {
  for(var j = 0; j<8; j++){
    if(j%2 === 0){
      for(var i=0; i<8; i++){
        if(i%2 === 0){
          squares[i] = new Square(i*100,j*100,250,0,0)
        }
        else if(i%2 === 1) {
          squares[i] = new Square(i*100,j*100,0,250,0)
        }
      }
      for (var a=0; a<squares.length; a++){
      squares[a].render();
      }
    }
  if(j%2 === 1){
    for(var i=0; i<8; i++){
      if(i%2 === 0){
        squares[i] = new Square(i*100,j*100,0,250,0)
        }
      else if(i%2 === 1) {
        squares[i] = new Square(i*100,j*100,250,0,0)
        }
      }
      for (var a=0; a<squares.length; a++){
      squares[a].render();
      }
    }
  }
}
