function FindContinuousSequence(sum) {
    var res = [],
        list = [],
        i = 1,
        nums = 0;
    while (i < sum) {
        if (nums < sum) {
            list.push(i)
            sum += i++
        }else{
            var p = list.shift()
            sum -= p
        }
        if(nums === sum){
            res.push(list)
        }
    }
    return res
}