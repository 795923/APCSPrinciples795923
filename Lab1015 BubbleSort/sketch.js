//  Allison Smith
// 	October 18, 2019
var list = [3,2,5,7,0,9]

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (j=0; j<list.length-1; j++){
    for (i=0; i<list.length-1-j; i++){
      if (list[i+1] < list[i]) {
        var tmp = list[i];
        list[i] = list[i+1];
        list[i+1] = tmp;
      }
    }
  }
  console.log(list)
}
