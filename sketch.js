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
	rect(5,300,635,250);

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
 rect(450,180,200,150);

// set fill color for top building
fill(255,255,255);
//top of building
triangle(450,165,550,60,636,165);

//fill color in tree body
fill(102,51,0);
//tree body
rect(55,150,55,175);

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
ellipse(100, 140, 40, 40);
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





}
