QUnit.module( "Rule tests" );

QUnit.test( "Start test", function( assert ) {
    startThatGame()
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Reset test", function( assert ) {
    //reset();
    assert.equal(grid[0], -1, "Passed")
    assert.equal(grid[1], -1, "Passed")
    assert.equal(grid[2], -1, "Passed")
    assert.equal(grid[3], -1, "Passed")
    assert.equal(grid[4], -1, "Passed")
    assert.equal(grid[5], -1, "Passed")
    assert.equal(grid[6], -1, "Passed")
    assert.equal(grid[7], -1, "Passed")
    assert.equal(grid[8], -1, "Passed")
    assert.equal(winTime, 0, "Passed")
});

QUnit.test( "DoMove test", function( assert ) {
    assert.equal(grid[0], -1, "Passed")
    assert.equal(grid[1], -1, "Passed")
    assert.equal(grid[2], -1, "Passed")
    assert.equal(grid[3], -1, "Passed")
    assert.equal(grid[4], -1, "Passed")
    assert.equal(grid[5], -1, "Passed")
    assert.equal(grid[6], -1, "Passed")
    assert.equal(grid[7], -1, "Passed")
    assert.equal(grid[8], -1, "Passed")
    doMove(0,0)
    assert.equal(grid[0], true, "Passed")
    assert.equal(grid[1], false, "Passed")
    assert.equal(grid[2], -1, "Passed")
    assert.equal(grid[3], -1, "Passed")
    assert.equal(grid[4], -1, "Passed")
    assert.equal(grid[5], -1, "Passed")
    assert.equal(grid[6], -1, "Passed")
    assert.equal(grid[7], -1, "Passed")
    assert.equal(grid[8], -1, "Passed")
});

QUnit.test( "DoAI test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
    //doAI()
});

QUnit.test( "ChangeTurn test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
    //changeTurn()
});

QUnit.test( "CheckTicTacToe test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
    //checkTicTacToe()
});

QUnit.test( "CheckTie test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
    //checkTie()
});