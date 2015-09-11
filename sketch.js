 function setup() {
	// create a place to draw
	createCanvas(640, 360);
 }

  function draw() {
	// clear the background
	background(205, 229, 255);

	// set a stroke color
	stroke(255, 0, 0);
  // set a stroke color for clouds
	noStroke(0,0,0);

	// set ground color
	fill(0,92,9);
	//set ground
	rect(0,300,640,260);

	// set a fill color for clouds
	fill(255, 255, 255);
	// draw clouds
  ellipse(200, 30, 50, 50);
ellipse(160, 40, 50, 50);
ellipse(185, 65, 50, 50);
ellipse(230, 50, 50, 50);
ellipse(350, 65, 50, 50);
ellipse(310, 50, 50, 50);
ellipse(340, 35, 50, 50);
ellipse(375, 40, 50, 50);

 // set fill color for sun
 fill(255,255,102);
 // draw a sun
 ellipse(30,30,30,30);

 // set fill color for building
 fill(102,0,0);
 //foundation for building back
 rect(450,120,200,150);
 // set fill color for building
 fill(132,31,39);
//foundation for building
 rect(450,150,200,150);

// set fill color for top building
fill(255,255,255);
//top of building
triangle(450,150,550,45,642,150);

//fill color in tree body
fill(102,51,0);
//tree body
rect(55,150,55,175);

//tree arms
rect(05,250,55,05);
rect(105,250,55,05);

//fill for triangle body part one
fill(0,102,204);
//children's triangle body part one
triangle(180,300,210,225,250,300);
//fill in children ellipse part one
fill(255,255,153);
//children ellipse part one
ellipse(210,210,45,45);
//fill in triangle body part two
fill(255,102,102);
//children's triangle body part two
triangle(180,300,250,225,270,300);
//fill in children ellipse part two
fill(255,153,255);
//children ellipse part two
ellipse(250,210,45,45);
//fill in triangle body part three
fill(153,204,255);
//children's triangle body part three
triangle(260,300,300,225,330,300);
//fill children ellipse part three
fill(255,153,51);
//children ellipse part three
ellipse(300,210,45,45);
//fill triangle body part four
fill(0,0,153);
//children's triangle body part four
triangle(320,300,350,225,370,300);
//fill children ellipse part four
fill(204,153,255);
//children ellipse part four
ellipse(350,210,45,45);
//fill for triangle body part five
fill (216,191,216);
//children's triangle body part five
triangle(360,300,400,225,425,300);
//fill children ellipse part five
fill(154,205,50);
//children ellipse part five
ellipse(400,210,45,45);

//fill color for fence
fill(102,51,0);
//fence
rect(180,260,250,10);
rect(180,300,250,10);
rect(180,220,250,10);
rect(180,160,10,140);
rect(225,160,10,140);
rect(270,160,10,140);
rect(320,160,10,140);
rect(370,160,10,140);
rect(425,160,10,140);

//stroke for the tree bush
noStroke(0,0,0);

//fill for filler tree
fill(0,153,0);
//filler for tree bushes
ellipse(100, 170, 50, 50);
ellipse(130, 140, 50, 50);
ellipse(70, 140, 50, 50);
ellipse(45, 140, 50, 50);
ellipse(80, 140, 50, 50);
ellipse(100,140, 40, 40);
ellipse(50,100,60,60);
ellipse(97,100,55,55);
ellipse(60,160,55,55);

//stroke for the lab coat
noStroke(0,0,0);
//filler for lab coat
fill(255,255,255);
//lab coat
rect(45,215,70,100);

//stroke the coat line
stroke(0,0,0);
//lab coat line
line(80,210,80,320);

//stroke for glasses
stroke(0,0,0);
//fill in glasses
fill(255,255,255);
//glasses
rect(90,140,15,30);
rect(60,140,15,30);
//line for glasses
line(110,150,55,150);
//fill for eyes
fill(0,0,0)
//eyes
ellipse(67,160,5,5)
ellipse(100,160,5,5)

//stroke for door
noStroke(255,0,0);
//fill for door
fill(192,192,192);
//door for building
rect(500,200,100,100);

//fill for eyes part one
fill(0,0,0);
//eyes for children
ellipse(196,205,5,5);
ellipse(210,205,5,5);
ellipse(240,205,5,5);
ellipse(260,205,5,5);
ellipse(290,205,5,5);
ellipse(310,205,5,5);
ellipse(340,205,5,5);
ellipse(360,205,5,5);
ellipse(400,205,5,5);
ellipse(420,205,5,5);

//fill for doorknob
fill(0,0,0);
//doorknob
ellipse(590,250,7,7);

}
