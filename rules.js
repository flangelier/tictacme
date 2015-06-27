function start()
{
	grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
	playerTurn= true;
	first = true;
	drawGrid();
	drawTurn(playerTurn);
	console.log("redraw");
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
	console.log("AI TURNRNRRNRNRNNR");
	return findMove(grid);
}

function changeTurn(pos)
{
	if (checkTicTacToe(playerTurn, pos))
	{
		if (playerTurn)
			drawWon(++winTime);
		else
		{
			sendFeed(winTime);
			winTime = 0;
			drawWon(0);
		}
		start();
	}
	else if (checkTie())
	{
		start();
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
		if (i == -1)
			return true;
	return false;
}

var grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
var winTime = 0;
var playerTurn = true;
var first = true;

start();