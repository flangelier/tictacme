function minimaxRoot(depth) {
    var beta = 9999999;
    var alpha = -9999999;
    var bestMove = 0;
    var score = 0;

    for (var i = 0; i < grid.length; i++) {
        if(grid[i] == -1) {
            //doMove
            grid[i] = playerTurn;

            //nextMove
            score = minimax(depth-1, alpha, beta, !playerTurn);

            //undoMove
            grid[i] = -1;

            if (score > alpha) {
                alpha = score;
                bestMove = i;
            }

            if(beta <= alpha)
                break;
        }
    }

    return bestMove;
}

function minimax(depth, alpha, beta, player) {

    if (depth == 0 || checkTicTacToe()) {
        return eval()*(depth+1);
    }

    var score = 0;

    if(player == false) {

        for(var i = 0; i < grid.length; i++) {
            if(grid[i] == -1) {
                //doMove
                grid[i] = player;

                //nextMove
                score = minimax(depth-1, alpha, beta, !player);

                //undoMove
                grid[i] = -1;

                if (score > alpha) {
                    alpha = score;
                }

                if (beta <= alpha)
                    return alpha;
            }
        }

        return alpha;
    }
    else {

        for (var i = 0; i < grid.length; i++) {
            if(grid[i] == -1) {
                //doMove
                grid[i] = player;

                //nextMove
                score = minimax(depth-1, alpha, beta, !player);

                //undoMove
                grid[i] = -1;

                if (score < beta) {
                    beta = score;
                }

                if (beta <= alpha)
                    return beta;
            }
        }

        return beta;
    }
}

function eval() {
    var score = 0;

    //vérifie si quelqu'un à gagné
    if (checkTicTacToeForPlayer(false))
        score = 100;
    else if (checkTicTacToeForPlayer(true))
        score = -100;

    return score;
}
