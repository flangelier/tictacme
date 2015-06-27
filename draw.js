function drawGrid()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.moveTo(squareWidth, 0);
	context.lineTo(squareWidth, canvas.height);
	context.stroke();
	
	context.moveTo(squareWidth * 2, 0);
	context.lineTo(squareWidth * 2, canvas.height);
	context.stroke();
	
	context.moveTo(0, squareHeight);
	context.lineTo(canvas.width, squareHeight);
	context.stroke();
	
	context.moveTo(0, squareHeight * 2);
	context.lineTo(canvas.width, squareHeight *2);
	context.stroke();
}

function drawX(x, y)
{
	console.log("draw x");
	context.moveTo(squareWidth * x, squareHeight * y);
	context.lineTo(squareWidth * (x + 1), squareHeight * (y + 1));
	context.stroke();

	context.moveTo(squareWidth * (x + 1), squareHeight * y);
	context.lineTo(squareWidth * x, squareHeight * (y + 1));
	context.stroke();
}

function drawO(x, y)
{
	console.log("draw o");
	context.beginPath();
	context.arc(squareWidth * (x + 0.5), squareHeight * (y + 0.5), squareHeight / 2,0,2*Math.PI);
	context.stroke();
}

function drawTurn(isPlayerTurn)
{
	if (isPlayerTurn)
	{
		turnView.innerHTML = "Your turn";
	}
	else
	{
		turnView.innerHTML = "AI turn";
	}
}

function drawWon(timeWon)
{
	wonView.innerHTML = "You won " + timeWon + " time!";
}

var turnView = document.getElementById("turn");
var wonView = document.getElementById("won");
var canvas = document.getElementById("tictactoe");
var context = canvas.getContext("2d");
var squareWidth = canvas.width/3;
var squareHeight = canvas.height/3;