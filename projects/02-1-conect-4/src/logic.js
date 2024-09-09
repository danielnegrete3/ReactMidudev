
export function isWinner(board, row, col) {
    var length = board.length - 1;
    var turn = board[row][col];
    var odds = Array(4).fill(0);

    // if is continuous the colors of the column

    let horMor = true;
    let horLess = true;

    // if the diagonal 1 is continuous
    let dia1Back = true;
    let dia1Next = true;

    // if the diagonal 2 is continuous 
    let dia2Back = true;
    let dia2Next = true;

    for (var i = 1; i <= 3; i++) {
        let colMor = col + i
        let colLess = col - i;
        let rowMor = row + i
        let rowLess = row - i;

        // vertical
        if (rowMor <= length) {
            if (board[rowMor][col] == turn) {
                odds[0]++;
            }

            // diagonal 1 back step
            if (colLess >= 0 && dia1Back) {
                if (board[rowMor][colLess] == turn) {
                    odds[2]++;
                } else {
                    dia1Back = false;
                }
            }
            // diagonal 2 next step
            if (colMor <= length && dia2Next) {
                if (board[rowMor][colMor] == turn) {
                    odds[3]++;
                } else {
                    dia2Next = false;
                }
            }

        }
        // horizontal
        if (colMor <= length) {
            if (board[row][colMor] == turn && horMor) {
                odds[1]++;
            } else {
                horMor = false;
            }

            // diagonal 1 next step
            if(rowLess >=0 && dia1Next){
                if(board[rowLess][colMor] == turn){
                    odds[2]++;
                }else{
                    dia1Next = false;
                }
            }

        }
        if (colLess >= 0) {
            if (board[row][colLess] == turn && horLess) {
                odds[1]++;
            } else {
                horLess = false;
            }

            //  diagonal 2 back step 
            if(rowLess >=0 && dia2Back){
                if(board[rowLess][colLess] == turn){
                    odds[3]++;
                }else{
                    dia2Back = false;
                }
            }
        }

    }

    for (i = 0; i < 4; i++) {
        if (odds[i] >= 3) {
            return turn
        }
    }

    for(i=0; i <= length; i++){
        if(board[0].includes(null)){
            return null
        }
    }

    return false;
}