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
	fill(153,153,0);

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
 fill(255,204,0);

 // draw a sun
 ellipse(50,50,50,50);
}
