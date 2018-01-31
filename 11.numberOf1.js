function numberOf1(n) {
    if (n < 0) {
        n = n >>> 1
    }
    let arr = n.toString(2).split('')
    return arr.reduce((a, b) => {
        console.log(a, b)
        return b === '1' ? a + 1 : a
    }, 0)
}