//  Allison Smith
// 	October 21, 2019
var rectangles = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i=0; i < 100; i++){
    rectangles[i] = new Rectangle(i,000,width/rectangles.length, random(0,800));
  }
  shuffle(rectangles, true);

//selection
for (var i = 0; i < rectangles.length - 1; i++){
    var index = i;
    for (var j = i + 1; j < rectangles.length; j++){
    if (rectangles[j] < rectangles[index]){
       index = j;
    }
  }
    var smallerNumber = rectangles[index];
    rectangles[index] = rectangles[i];
    rectangles[i] = smallerNumber;
    }
}
function draw(){
  for(var i=0; i < rectangles.length; i++){
    rectangles[i].render();
  }
}
