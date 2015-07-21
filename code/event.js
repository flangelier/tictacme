function onMouseClicked(event)
{
	if (playerTurn)
	{
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;
		var positionX = Math.floor(x / squareWidth);
		var positionY = Math.floor(y / squareHeight);
		doMove(positionX, positionY);
	}
}

canvas.addEventListener("click", onMouseClicked);