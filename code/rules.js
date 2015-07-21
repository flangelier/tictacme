function startNewGame()
{
	grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
	playerTurn= true;
	first = true;
	drawGrid();
	drawTurn(playerTurn);
}

function reset()
{
	startNewGame();
	winTime = 0;
	drawWonCounter(0);
}

function doMove(x, y)
{
    if (x < 0 || x > 2 || y < 0 || y > 2) {
        return false;
    }
    if (grid[y * 3 + x] == -1) {
        grid[y * 3 + x] = playerTurn;
        if (playerTurn)
            drawX(x, y);
        else
            drawO(x, y);
        changeTurn(y * 3 + x);
        return true;
    }
    return false;
}

function doAI()
{
    var depth = countEmptyCases();
	return minimaxRoot(depth);
}

function countEmptyCases()
{
    var count = 0;

    for(var i = 0; i < grid.length ; i++) {
        if (grid[i] == -1) {
            count++;
        }
    }

    return count;
}

function changeTurn(pos)
{
	if (checkTicTacToeForMove(playerTurn, pos))
	{
		if (playerTurn)
		{
			drawWonCounter(++winTime);
			drawWin();
			setTimeout(function(){ startNewGame(); }, 2000);
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
		setTimeout(function(){ startNewGame(); }, 2000);
	}
	else
	{
		playerTurn = !playerTurn;
		drawTurn(playerTurn);
		if (!playerTurn)
		{
            var move = doAI();
            var x = move%3;
            var y = Math.floor(move/3);
            doMove(x, y);
		}
	}
}

function checkTicTacToeForMove(player, pos)
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

function checkTicTacToe()
{
	for(var player = 0 ; player < 2 ; player++) {
		for(var position = 0 ; position < 9 ; position++) {
			if(checkTicTacToeForMove(player, position))
				return true;
		}
	}
}

function checkTicTacToeForPlayer(player)
{
	for(var position = 0 ; position < 9 ; position++) {
		if(checkTicTacToeForMove(player, position))
			return true;
	}
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

startNewGame();