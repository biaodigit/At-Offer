function maxInWindows(num, size) {
    if (!num || !size) return []
    let res = [],
        l = 0,
        r = size - 1;
    while (r < num.length) {
        let map = num.slice(l, r + 1)
        res.push(Math.max.apply(null, map))
        l++, r++
    }
    return res
}