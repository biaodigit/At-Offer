function FindNumbersWithSum(array, sum) {
    // write code here
    if (array.length < 2) {
        return []
    }
    var l = 0,
        r = array.length - 1;
    while (l < r) {
        if (array[l] + array[r] < sum) {
            l++
        } else if (array[l] + array[r] > sum) {
            r--
        } else {
            return [array[l], array[r]]
        }
    }
    return []
}