 function setup() {
	// create a place to draw
	createCanvas(640, 360);
 }

  function draw() {
	// clear the background
	background(205,229, 255);

	// set a fill color
	fill(255, 255, 255);

	// set a stroke color
	stroke(255, 0, 0);

  // set a stroke color for clouds
	noStroke(0,0,0);
	// draw a circle
  ellipse(200, 30, 50, 50);
ellipse(160, 40, 50, 50);
ellipse(185, 65, 50, 50);
ellipse(230, 50, 50, 50);
}
