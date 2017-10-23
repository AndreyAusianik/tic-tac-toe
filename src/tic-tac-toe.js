class TicTacToe {
    constructor() {
        this.field = Array(3).fill(0).map(row => Array(3).fill(null));
        this.turn = 0;
    }

    getCurrentPlayerSymbol() {
        return this.turn % 2 ? 'o': 'x';
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn++;
        }
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
    }

    getWinner() {
        const f = this.field;
        for(let row of f) {
            if(row[0] === row[1] && row[0] === row[2]) {
                return row[0];
            }
        }
        for(let j = 0; j < 3; j++)
            if(f[0][j] === f[1][j] && f[0][j] === f[2][j])
                return f[0][j];
        if(f[0][0] === f[1][1] && f[0][0] === f[2][2])
            return f[0][0];
        if(f[0][2] === f[1][1] && f[0][2] === f[2][0])
            return f[0][2];
        return null;
    }

    noMoreTurns() {
        return this.turn === 9;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;