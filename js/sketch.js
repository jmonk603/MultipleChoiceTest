var left = 0;
var right = 0;
var counter = 0;
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  textSize(25)
  fill('white')
  text(left,windowWidth/4,100)
  text(right,(windowWidth/4)+(windowWidth/2),100)
  text(letters[counter],windowWidth/2,100)
  
}

function touchEnded(){
  if (mouseX < windowWidth/2){
    left +=1;
  }
  if (mouseX > windowWidth/2){
    right +=1;
  }
  counter += 1;
}
