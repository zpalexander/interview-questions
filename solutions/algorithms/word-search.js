export function wordSearch(board, word) {
    // Set up shadow board to keep track of visited letters
    const emptyVisitedBoard = [];
    for (let row = 0; row < board.length; row++) {
        emptyVisitedBoard.push([]);
        for (let column = 0; column < board[row].length; column++) {
            emptyVisitedBoard[row][column] = false;
        }
    }


    const letterSequence = word.split('');
    let containsWord = false;

    function dfsHelper(row, column, currentLetterIndex, visited) {
        // Base case #1:
        // If our current letter index says we've already found all
        // the letters, it means that the word exists in the board
        // so return true
        if (currentLetterIndex === letterSequence.length) {
            containsWord = true;
            return true;
        }

        // Base case #2:
        // If the letter we're looking at in the search doesn't match the letter
        // we're searching for, this path isn't a match, so stop searching
        if (board[row][column] !== letterSequence[currentLetterIndex]) return false;

        // Base case #3:
        // If we've already visited this cell as part of this search, we're not
        // allowed to reuse the letter to help build the word, so stop searching
        // in this direction
        if (visited[row][column] === true) return false;


        // If this is the letter we're looking for, update to the next letter we
        // want and continue to traverse from this point to all possible next cells
        // looking for that next letter
        visited[row][column] = true;
        if (row + 1 < board.length) {
            dfsHelper(row + 1, column, currentLetterIndex + 1, visited);
        }

        if (row - 1 > -1) {
            dfsHelper(row - 1, column, currentLetterIndex + 1, visited);
        }

        if (column + 1 < board[row].length) {
            dfsHelper(row, column + 1, currentLetterIndex + 1, visited);
        }

        if (column - 1 > -1) {
            dfsHelper(row, column - 1, currentLetterIndex + 1, visited);
        }
    }

    // Start a search for the word at each letter on the board
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
            dfsHelper(row, column, 0, [...emptyVisitedBoard]);
        }
    }

    return containsWord;
}
