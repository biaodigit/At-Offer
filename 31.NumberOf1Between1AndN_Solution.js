function NumberOf1Between1AndN_Solution(n) {
    var count = 0,
        num;
    if (n < 1) return count

    for (var i = 1; i <= n; i++) {
        num = i
        while (num > 0) {
            if (num % 10 === 1) {
                count++
            }
            num = Math.floor(num / 10)
        }
    }
    return count
}