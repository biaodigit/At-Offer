function GetUglyNumber_Solution(index) {
    if (index === 0) return 0

    var uglyNums = [1],
        ugly2 = 0,
        ugly3 = 0,
        ugly5 = 0;
    for (var i = 0; i < index; i++) {
        uglyNums[i] = Math.min(uglyNums[ugly2] * 2, uglyNums[ugly3] * 3, uglyNums[ugly5] * 5)
        if (uglyNums[i] === uglyNums[ugly2] * 2) ugly2++
        if (uglyNums[i] === uglyNums[ugly3] * 3) ugly3++
        if (uglyNums[i] === uglyNums[ugly5] * 5) ugly5++
    }
    return uglyNums[index-1]
}