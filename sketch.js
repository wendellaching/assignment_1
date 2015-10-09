var colorWhite = (255, 255, 255);
var colorBlack = (0, 0, 0);

function setup() {
  // create a place to draw
  createCanvas(640, 360);
}

function draw() {
  // clear the background
  background(205, 229, 255);
  stroke(255, 0, 0);
  // set a stroke color for clouds
  noStroke();
  // ground color
  fill(0, 92, 9);
  rect(0, 300, 640, 260);

  //clouds
  fill(colorWhite);
  ellipse(200, 30, 50, 50);
  ellipse(160, 40, 50, 50);
  ellipse(185, 65, 50, 50);
  ellipse(230, 50, 50, 50);
  ellipse(350, 65, 50, 50);
  ellipse(310, 50, 50, 50);
  ellipse(340, 35, 50, 50);
  ellipse(375, 40, 50, 50);

  // sun
  fill(255, 255, 102);
  ellipse(30, 30, 30, 30);

  // set fill color for building
  fill(102, 0, 0);
  //foundation for building back
  rect(450, 120, 200, 150);
  // set fill color for building
  fill(132, 31, 39);
  //foundation for building
  rect(450, 150, 200, 150);

  // set fill color for top building
  fill(colorWhite);
  //top of building
  triangle(450, 150, 550, 45, 642, 150);

  // tree body
  fill(102, 51, 0);
  rect(55, 150, 55, 175);
  //tree arms
  rect(05, 250, 55, 05);
  rect(105, 250, 55, 05);

  //children's body
  for (i = 0; i < 5; i++) {
    fill(0, 102, 204);
    rect(i * 50 + 180, 205, 35, 100);
  }

  //children's face
  for (i = 0; i < 5; i++) {
    fill(255, 255, 153);
    ellipse(i * 50 + 200, 210, 50, 50);
  }
  //kid's eyes
  for (i = 0; i < 10; i++) {
    fill(colorBlack);
    ellipse(i * 24 + 200, 210, 07, 07);
  }


  //fence
  fill(102, 51, 0);
  rect(180, 260, 250, 10);
  rect(180, 300, 250, 10);
  rect(180, 220, 250, 10);
  //loop for vertical fence
  for (i = 0; i < 7; i++) {
    fill(102, 51, 0);
    rect(i * 38 + 185, 165, 10, 140);
  }

  //tree bushes
  fill(0, 153, 0);
  ellipse(100, 170, 50, 50);
  ellipse(130, 140, 50, 50);
  ellipse(70, 140, 50, 50);
  ellipse(45, 140, 50, 50);
  ellipse(80, 140, 50, 50);
  ellipse(100, 140, 40, 40);
  ellipse(50, 100, 60, 60);
  ellipse(97, 100, 55, 55);
  ellipse(60, 160, 55, 55);

  //lab coat
  noStroke();
  fill(colorWhite);
  rect(45, 215, 70, 100);

  //stroke the coat line
  stroke(colorBlack);
  line(80, 210, 80, 320);

  //glasses
  stroke(colorBlack);
  fill(colorWhite);
  rect(90, 140, 15, 30);
  rect(60, 140, 15, 30);
  line(110, 150, 55, 150);

  //eyes for eyes
  fill(colorBlack)
  ellipse(67, 160, 5, 5)
  ellipse(100, 160, 5, 5)

  //dook
  noStroke();
  fill(192, 192, 192);
  rect(500, 200, 100, 100);

  //doorknob
  fill(colorBlack);
  ellipse(590, 250, 7, 7);
}
