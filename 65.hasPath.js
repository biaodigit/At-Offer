function hasPath(matrix, rows, cols, path) {
    // write code here
    let len = path.length,
        res = [],
        k = 0;

    for (let i = 0; i < rows; i++) {
        let arr = []
        for (let j = 0; j < cols; j++) {
            arr[j] = matrix[k++]
        }
        res[i] = arr
    }
    let searchWord = function (matrix, index, row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || matrix[row][col] !== path[index] || index >= len) {
            return false
        }

        matrix[row][col] = '#'
        index++
        if (index === len) return true

        if (searchWord(matrix, index, row - 1, col)) return true

        if (searchWord(matrix, index, row, col + 1)) return true

        if (searchWord(matrix, index, row + 1, col)) return true

        if (searchWord(matrix, index, row, col - 1)) return true

        matrix[row][col] = path[--index]

        return false
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (searchWord(res, 0, i, j)) return true
        }
    }
    return false
}