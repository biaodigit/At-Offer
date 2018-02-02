function MoreThanHalfNum_Solution(numbers) {
    // write code here
    var map = {},
        res = [],
        len = numbers.length / 2;
    for (var i = 0; i < numbers.length; i++) {
        if (!map[numbers[i]]) {
            map[numbers[i]] = 1
        } else {
            map[numbers[i]]++
        }
    }
    for (var key in map) {
        if (map[key] > len) return parseInt(key)
    }
    return 0
}