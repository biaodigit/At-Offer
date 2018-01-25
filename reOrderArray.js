function reOrderArray(array) {
    let odd = [],
        even = [];
    for (let item of array) {
        if (item % 2 !== 0) {
            odd.push(item)
        } else {
            even.push(item)
        }
    }
    return odd.concat(even)
}
