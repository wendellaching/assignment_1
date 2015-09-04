function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background - skyblue
  background(180, 200, 255);

	// set a fill color white
	fill(255, 255, 255);
	// draw ground
	noStroke();
	rect(0, 300, 640, 100);

	// set a stroke color

	// draw a circle
	ellipse(320, 280, 100, 100);
	ellipse(320, 200, 80, 80);
	ellipse(320, 140, 60, 60);
}
