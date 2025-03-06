var left = 0;
var right = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  textSize(25)
  fill('white')
  text(left,windowWidth/4,100)
  text(right,(windowWidth/4)+(windowWidth/2),100)
}

function mouseClicked(){
  if (mouseX < windowWidth/2){
    left += 1;
  }
  if (mouseX > windowWidth/2){
    right += 1;
  }
}
