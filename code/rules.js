function start()
{
	grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
	playerTurn= true;
	first = true;
	drawGrid();
	drawTurn(playerTurn);
}

function reset()
{
	start();
	winTime = 0;
	drawWonCounter(0);
}

function doMove(x, y)
{
	if (grid[y * 3 + x] == -1)
	{
		grid[y * 3 + x] = playerTurn;
		if (playerTurn)
			drawX(x, y);
		else
			drawO(x, y);
		changeTurn(y * 3 + x);
	}
}

function doAI()
{
	return findMove(grid);
}

function changeTurn(pos)
{
	if (checkTicTacToe(playerTurn, pos))
	{
		if (playerTurn)
		{
			drawWonCounter(++winTime);
			drawWin();
			setTimeout(function(){ start(); }, 2000);
		}
		else
		{
			drawLose();
			sendFeed(winTime);
		}
	}
	else if (checkTie())
	{
		drawTie();
		setTimeout(function(){ start(); }, 2000);
	}
	else
	{
		playerTurn = !playerTurn;
		drawTurn(playerTurn);
		if (!playerTurn)
		{
			var move = doAI();
			doMove(move%3, Math.floor(move/3));
		}
	}
}

function checkTicTacToe(player, pos)
{
	var column = pos % 3;
	var row = pos - column;
	if (grid[row] == player && grid[row+1] == player && grid[row+2] == player)
		return true;
	else if (grid[column] == player && grid[column+3] == player && grid[column+6] == player)
		return true;
	else if (grid[0] == player && grid[4] == player && grid[8] == player)
		return true;
	else if (grid[2] == player && grid[4] == player && grid[6] == player)
		return true;
	else
		return false;
}

function checkTie()
{
	for (var i in grid)
		if (grid[i] == -1)
			return false;
	return true;
}

document.getElementById("reset").onclick=reset;
var grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
var winTime = 0;
var playerTurn = true;
var first = true;

start();