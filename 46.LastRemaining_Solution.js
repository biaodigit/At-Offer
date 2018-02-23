function LastRemaining_Solution(n, m) {
    if (n === 0 || m === 0) return -1
    let data = []
    for (let i = 0; i < n; i++) {
        data[i] = i
    }
    let index = -1
    while (data.length > 1) {
        index = (index + m) % data.length
        data.splice(index,1)
        index--
    }
    return data[0]
}