
var colors = randomColorArray(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbDisplay = document.querySelector("#rgb");
var answer = document.getElementById("answer");
var h1Color = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function()
{
	// generate all new colors
	colors = randomColorArray(6);
	// pick a new random color for goal
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	// change the colors of the squares to reflect this
	for(var i = 0; i < squares.length; i++)
	{
		//Add color to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1Color.style.backgroundColor = "#232323";

})

rgbDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++)
{
	//Add color to squares
	squares[i].style.backgroundColor = colors[i];
	//Add click listeners
	squares[i].addEventListener("click", function()
	{
		//Compare color of clicked square to goal color
		var clickedSquareColor = this.style.backgroundColor;
		if(clickedSquareColor === pickedColor)
		{
			answer.textContent = "Correct!";
			resetButton.textContent ="Play Again?";
			changeAllColors();
		}

		else
		{
			//if false set color to background
			this.style.backgroundColor = "#232323";
			answer.textContent ="Try Again!";
		}

	});
}

function changeAllColors()
{
	//change colors of squares and heading
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = pickedColor;
	}

	h1Color.style.backgroundColor = pickedColor;
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColorArray(numOfSquares)
{
	//Make array filled with random colors
	var colorArray = [];

	for(var i = 0; i < numOfSquares; i++)
	{
		var color = generateRandomColor();
		colorArray.push(color);
	}
	return colorArray;

}

function generateRandomColor()
{
	//pick red from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var green = Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red +", " + green + ", " + blue + ")";
}