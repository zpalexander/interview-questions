export function numberOfIslands(grid) {
    let numberOfIslandsCount = 0;

    function dfsHelper(row, column) {
        if (grid[row][column] === 0) return;

        grid[row][column] = 0;

        // Recurse to all valid neighbors
        if (row + 1 < grid.length) {
            dfsHelper(row + 1, column);
        }

        if (row - 1 > -1) {
            dfsHelper(row - 1, column);
        }

        if (column + 1 < grid[row].length) {
            dfsHelper(row, column + 1);
        }

        if (column - 1 > -1) {
            dfsHelper(row, column - 1);
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            if (grid[row][column] === 1) {
                numberOfIslandsCount++;
                dfsHelper(row, column);
            }
        }
    }

    return numberOfIslandsCount;
}
