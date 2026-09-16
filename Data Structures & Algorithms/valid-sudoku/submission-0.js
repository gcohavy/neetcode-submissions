class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let map = new Map();
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                const current = board[i][j];
                if(current === '.') continue;

                const colVal = 'column' + j + '-' + current;
                if(map.has(colVal)) return false;
                map.set(colVal, true);

                const rowVal = 'row' + i + '-' + current;
                if(map.has(rowVal)) return false;
                map.set(rowVal, true);

                const squareVal = 'square' + this.currentSquare(i,j) + '-' + current;
                if(map.has(squareVal)) return false
                map.set(squareVal, true);
            }
        }
        return true;
    }

    between(a, b, c) {
        return a >= b && a < c;
    }

    currentSquare(a, b) {
        const aOne = this.between(a,0,3);
        const aFour = this.between(a,3,6);
        const aSeven = this.between(a,6,9);
        const bOne = this.between(b,0,3);
        const bFour = this.between(b,3,6);
        const bSeven = this.between(b,6,9);
        if(aOne && bOne) return 'a';
        if(aFour && bOne) return 'b';
        if(aSeven && bOne) return 'c';
        if(aOne && bFour) return 'd';
        if(aFour && bFour) return 'e';
        if(aSeven && bFour) return 'f';
        if(aOne && bSeven) return 'g';
        if(aFour && bSeven) return 'h';
        if(aSeven && bSeven) return 'i';
        return null;
    }
}
