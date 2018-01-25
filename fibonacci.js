function Fibonacci(n) {
    var a = 1, b = 1, temp;
    if (n <= 0) return 0;
    if (n === 1) {
        return 1
    }
    for (var i = 2; i <= n; i++) {
        temp = b
        b = a + b
        a = temp
    }
    return temp;
}