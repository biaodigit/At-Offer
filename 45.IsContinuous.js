function IsContinuous(numbers) {
    // write code here
    let len = numbers.length,
        times = [-5];
    for (let i = 0; i < len; i++) {
        times.push(0)
    }
    if (numbers.length !== 5) return false
    let max = -1,
        min = 14;
    for (let i = 0; i < len; i++) {
        times[numbers[i]]++
        if (numbers[i] === 0) continue
        if (times[numbers[i]] > 1) return false
        if (numbers[i] > max) {
            max = numbers[i]
        }
        if (numbers[i] < min) {
            min = numbers[i]
        }
    }
    return max - min < 5
}