QUnit.module( "Draw tests" );
QUnit.test( "Draw tests", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "DrawTurn test", function( assert ) {
    drawTurn(true);
    assert.equal(turnView.innerHTML, "Your turn", "Your turn" );
    drawTurn(false);
    assert.equal(turnView.innerHTML, "AI turn", "AI turn" );
});