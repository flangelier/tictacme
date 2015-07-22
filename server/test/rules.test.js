QUnit.module( "Rule tests" );

QUnit.test( "Start test", function( assert ) {
    startNewGame()
    assert.equal(grid[0], -1, "Grid0 = -1");
    assert.equal(grid[1], -1, "Grid1 = -1");
    assert.equal(grid[2], -1, "Grid2 = -1");
    assert.equal(grid[3], -1, "Grid3 = -1");
    assert.equal(grid[4], -1, "Grid4 = -1");
    assert.equal(grid[5], -1, "Grid5 = -1");
    assert.equal(grid[6], -1, "Grid6 = -1");
    assert.equal(grid[7], -1, "Grid7 = -1");
    assert.equal(grid[8], -1, "Grid8 = -1");
    assert.equal(playerTurn, true, "Is palyer turn" );
    assert.equal(first, true, "Is first" );
});

QUnit.test( "Reset test", function( assert ) {
    reset();
    assert.equal(grid[0], 0, "Grid0 = 0");
    assert.equal(grid[1], -1, "Grid1 = -1");
    assert.equal(grid[2], -1, "Grid2 = -1");
    assert.equal(grid[3], -1, "Grid3 = -1");
    assert.equal(grid[4], -1, "Grid4 = -1");
    assert.equal(grid[5], -1, "Grid5 = -1");
    assert.equal(grid[6], -1, "Grid6 = -1");
    assert.equal(grid[7], -1, "Grid7 = -1");
    assert.equal(grid[8], -1, "Grid8 = -1");
    assert.equal(playerTurn, true, "Is palyer turn" );
    assert.equal(first, true, "Is first" );
    assert.equal(winTime, 0, "Win time set to 0");
    assert.equal(wonView.innerHTML, "You won 0 time!", "WonView resetted");
});

QUnit.test( "DoMove test", function( assert ) {
    reset();
    assert.equal(grid[0], 0, "Grid0 = 0");
    assert.equal(grid[1], -1, "Grid1 = -1");
    assert.equal(grid[2], -1, "Grid2 = -1");
    assert.equal(grid[3], -1, "Grid3 = -1");
    assert.equal(grid[4], -1, "Grid4 = -1");
    assert.equal(grid[5], -1, "Grid5 = -1");
    assert.equal(grid[6], -1, "Grid6 = -1");
    assert.equal(grid[7], -1, "Grid7 = -1");
    assert.equal(grid[8], -1, "Grid8 = -1");
    assert.equal(doMove(-1,0), false, "doMove -1,0 false");
    assert.equal(doMove(0,-1), false, "doMove 0,-1 false");
    assert.equal(doMove(3,0), false, "doMove 3,0 false");
    assert.equal(doMove(0,3), false, "doMove 0,3 false");
    assert.equal(grid[0], 0, "Grid0 = 0");
    assert.equal(grid[1], -1, "Grid1 = -1");
    assert.equal(grid[2], -1, "Grid2 = -1");
    assert.equal(grid[3], -1, "Grid3 = -1");
    assert.equal(grid[4], -1, "Grid4 = -1");
    assert.equal(grid[5], -1, "Grid5 = -1");
    assert.equal(grid[6], -1, "Grid6 = -1");
    assert.equal(grid[7], -1, "Grid7 = -1");
    assert.equal(grid[8], -1, "Grid8 = -1");
});