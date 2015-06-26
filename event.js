// FROM http://www.kirupa.com/html5/getting_mouse_click_position.htm
function getElementPosition(element)
{
    var xPosition = 0;
    var yPosition = 0;
      
    while (element)
	{
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

function onMouseClicked(element)
{
	if (playerTurn)
	{
		var parentPosition = getElementPosition(element.currentTarget);
		var xPosition = Math.floor((element.clientX - parentPosition.x) / squareWidth);
		var yPosition = Math.floor((element.clientY - parentPosition.y) / squareHeight);
		doMove(xPosition, yPosition);
	}
}

canvas.addEventListener("click", onMouseClicked);