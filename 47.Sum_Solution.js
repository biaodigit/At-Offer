function Sum_Solution(n) {
    let sum = n
    sum && (sum += Sum_Solution(n - 1))
    return sum
}