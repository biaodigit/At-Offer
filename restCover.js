function restCover(number) {
    if (number === 0 || number === 1) {
        return number
    }
    let a = 1, b = 1, temp = 0;
    for (let i = 0; i <= number; i++) {
        temp = a + b
        a = b
        b = temp
    }
    return temp
}
