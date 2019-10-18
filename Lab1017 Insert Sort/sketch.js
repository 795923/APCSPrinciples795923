//  Allison Smith
// 	October 18, 2019
var list = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  function swap(list, a,b){
    var temp =list[a];
    list[a]= list[b];
    list[b]= temp;
    }
  for(var i=0; i < 10; i++){
    list[i] = i;
  }
  shuffle(list, true);
  for(var j = 0; j<=list.length; j++){
    for(var i=0; i<=list.length-j; i++){
      if (list[i] > list[i+1]){
        swap(list, i, i+1)
        }
    }
  }
  console.log(list)
}
