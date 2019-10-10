//  Allison Smith
// 	October 10, 2019
var list = [2,6,9,1,3,8]

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
  test.render();
}

function test(){
  for(var i=0; i<=8; i++){
    if (list[0] > list[1]){
      swap(list, 0, 1)
      }
    if (list[1] > list[2]){
      swap(list, 1, 2)
      }
    if (list[2] > list[3]){
      swap(list, 2, 3)
      }
    if (list[3] > list[4]){
      swap(list, 3, 4)
      }
    if (list[4] > list[5]){
      swap(list, 4, 5)
      }
    if (list[5] > list[6]){
      swap(list, 5, 6)
      }
    }
}
console.log(list)
