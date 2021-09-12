var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");
width = 75;
height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

startx = 5;

starty = 225;

function add() {
	backimgtag = new Image()
	backimgtag.onload=uploadBackground();
	backimgtag.src=background_image;

	greencar_imgtag = new Image();
	greencar_imgtag.onload=uploadgreencar();
	greencar_imgtag.greencar_image;
}
function uploadBackground() {
	ctx.drawImage(backimgtag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag, startx, starty, width, height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (starty >= 0){
		starty = starty-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (starty <= 255) {
		starty = starty+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (startx >= 0) {
		startx = startx - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (startx <= 255) {
		startx = startx + 10;
		uploadBackground();
		uploadgreencar();
	}
}
