function GetLeastNumbers_Solution(input, k) {
    // write code here
    var nums = input.sort(function (a, b) {
        return a - b
    })
    return k <= nums.length ? nums.slice(0, k) : []

}