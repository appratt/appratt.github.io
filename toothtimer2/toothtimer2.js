/* from aestheic programming, chp 3*/

let tm = 0;

function setup() {
  //create a drawing canvas
  createCanvas(windowWidth, windowHeight);
  frameRate (10); //try to change this parameter
}

function draw() {
  background('rgba(57,153,221,0.5)'); // check this syntax with alpha value
  // also, i modified this to the somewhat more legilble integer RGBA notation
  drawElements();
  drawLines();
  encouragement();
}

function drawElements() {
  let num = 12;
  let rDotColor = 0;
  let gDotColor = 0;
  let bDotColor = 0;

  push();
  //move things to the center
  translate(width/2, height/2);
  /* 360/num >> degree of each ellipse's  movement;
  frameCount%num >> get the remainder to know which among num possible positions
  */
  let cir = 360/num*((frameCount/6)%num);
  rotate(radians(cir));
  noStroke();

  // randomize the color of the dots
  rDotColor = random(0, 255);
  gDotColor = random(0, 255);
  bDotColor = random(0, 255);

  fill(rDotColor, gDotColor, bDotColor);
  // the x parameter is the ellipse's distance from the center
  ellipse(width/4, 0, 42, 42);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawLines(){
  stroke(255, 255, 0);
  //static lines
  line(60, 0, 60, height);
  line(width-60, 0, width-60, height);
  line(0, 60, width, 60);
  line(0, height-60, width, height-60);
}

function encouragement(){
  tm = millis();
  let msgOffsetX = windowWidth/3 - 50;
  let msgOffsetY = windowHeight/3 + 50;
  noStroke();

  text(nfc((tm/1000),0),windowWidth/2, windowHeight/4);

  textSize(12);
  text("seconds:",windowWidth/2, windowHeight/4-60);

  let messageInterval = 6; //adjust the gap between messages
  // interval of 6 is 6 seconds, so 20*6 to make 2 min
  // e.g. 1000*20*6 is 2 min
  let messages = [
    "let's go!",
    "you've got this",
    "now you're \n cooking",
    "well not cooking",
    "brushing! you're \n brushing",
    "now for \n some \n animal facts",
    "a Blue Whale \n is almost as LOUD \n as a jet engine",
    "a 2-inch \n Pistol Shrimp is \n LOUDER than a \n blue whale",
    "you drink \n the same water \n as the dinosaurs",
    "same water as \n woolly mammoths too! \n and early humans \n and King Tut",
    "you're \n ALMOST DONE!",
    "NICE JOB! \n stop brushing"
  ]

  textSize(40);

  if (tm <= 1000) {
    text(messages[0], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*1*messageInterval && tm < 1000*2*messageInterval){
    text(messages[1], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*2*messageInterval && tm < 1000*3*messageInterval) {
    text(messages[2], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*3*messageInterval && tm < 1000*4*messageInterval) {
    text(messages[3], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*4*messageInterval && tm < 1000*5*messageInterval) {
    text(messages[4], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*5*messageInterval && tm < 1000*6*messageInterval) {
    text(messages[5], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*6*messageInterval && tm < 1000*10*messageInterval) {
    text(messages[6], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*10*messageInterval && tm < 1000*12*messageInterval) {
    text(messages[7], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*12*messageInterval && tm < 1000*16*messageInterval) {
    text(messages[8], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*16*messageInterval && tm < 1000*18*messageInterval) {
    text(messages[9], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*18*messageInterval && tm < 1000*20*messageInterval) {
    text(messages[10], msgOffsetX, msgOffsetY);
  }

  if (tm >= 1000*20*messageInterval) {
    text(messages[11], msgOffsetX, msgOffsetY);
  }

}

function mousePressed() {
  remove(); // remove whole sketch on mouse press
}
