function PrintMinNumber(numbers) {
    // write code here
    if (!numbers.length) return ""
    let res = []
    let permutation = function (nums, index, str) {
        if (nums.length === 0) {
            res.push(str)
            return
        }
        for (let i = 0; i < nums.length; i++) {
            let num = nums.splice(i, 1)
            permutation(nums, index + 1, str + num)
            nums.splice(i, 0, num)
        }
    }
    permutation(numbers, 0, "")
    let num = Math.min.apply(null, res)
    return num
}