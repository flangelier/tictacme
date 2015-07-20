QUnit.module( "AI tests" );
QUnit.test( "AI tests", function( assert ) {
    reset();
    assert.equal(grid[0], -1, "Passed")
    assert.equal(grid[1], -1, "Passed")
    assert.equal(grid[2], -1, "Passed")
    assert.equal(grid[3], -1, "Passed")
    assert.equal(grid[4], -1, "Passed")
    assert.equal(grid[5], -1, "Passed")
    assert.equal(grid[6], -1, "Passed")
    assert.equal(grid[7], -1, "Passed")
    assert.equal(grid[8], -1, "Passed")
    assert.equal(findMove(grid), 0, "Passed")
    doMove(0,0);
    assert.equal(findMove(grid), 2, "Passed")
    doMove(0,2);
    assert.equal(findMove(grid), 3, "Passed")
    doMove(2,2);
    assert.equal(findMove(grid), 4, "Passed")
});