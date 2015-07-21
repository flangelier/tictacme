function drawGrid()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
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
	context.beginPath();
	context.moveTo(squareWidth * x, squareHeight * y);
	context.lineTo(squareWidth * (x + 1), squareHeight * (y + 1));
	context.stroke();

	context.moveTo(squareWidth * (x + 1), squareHeight * y);
	context.lineTo(squareWidth * x, squareHeight * (y + 1));
	context.stroke();
}

function drawO(x, y)
{
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

function drawWonCounter(timeWon)
{
	wonView.innerHTML = "You won " + timeWon + " time!";
}

function drawWin()
{
	context.drawImage(win,0,0, win.width, win.height);
}

function drawLose()
{
	context.drawImage(lose,0,0, lose.width, lose.height);
}

function drawTie()
{
	context.drawImage(tie,0,0, tie.width, tie.height);
}

var turnView = document.getElementById("turn");
var wonView = document.getElementById("won");
var canvas = document.getElementById("tictactoe");
var context = canvas.getContext("2d");
var squareWidth = canvas.width/3;
var squareHeight = canvas.height/3;

//setup the images
var win = new Image();
var lose = new Image();
var tie = new Image();

win.src = "image/win.png";
win.width = canvas.width;
win.height = canvas.height;

lose.src = "image/lose.png";
lose.width = canvas.width;
lose.height = canvas.height;

tie.src = "image/tie.png";
tie.width = canvas.width;
tie.height = canvas.height;