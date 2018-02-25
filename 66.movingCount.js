function movingCount(threshold, rows, cols) {
    // write code here
    if (threshold < 0) return 0
    let path = new Array(cols).fill(false),
        paths = [];
    for (let i = 0; i < rows; i++) {
        paths[i] = path.slice(0)
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i === 0 && j === 0) {
                paths[i][j] = true
            } else if (i === 0 && j > 0 && paths[i][j - 1] && canreach(threshold, i, j)) {
                paths[i][j] = true
            } else if (i > 0 && j === 0 && paths[i - 1][j] && canreach(threshold, i, j)) {
                paths[i][j] = true
            } else if (i > 0 && j > 0 && ((paths[i - 1][j] && canreach(threshold, i, j)) || (paths[i][j - 1] && canreach(threshold, i, j)))) {
                paths[i][j] = true
            }

        }
    }
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (paths[i][j]) count++
        }
    }
    return count
}

function canreach(threshold, i, j) {
    let sum = 0,
        str = i + '' + j;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i])
    }
    if (sum > threshold) {
        return false
    }
    return true
}