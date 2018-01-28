function printMatrix(matrix) {
    let row = matrix.length,
        cols = matrix[0].length,
        left = 0, right = cols - 1,
        top = 0, bottom = row - 1,
        res = [];
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        for (let i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        if (top !== bottom) {
            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom][i])
            }
        }
        if (left !== right) {
            for (let i = bottom - 1; i > top; i--) {
                res.push(matrix[i][left])
            }
        }
        left++, top++, right--, bottom--
    }
    return res
}