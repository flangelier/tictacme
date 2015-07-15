function findMove(grid)
{
	for (var i = 0; i < grid.length; i++)
		if (grid[i] == -1)
			return i;
}