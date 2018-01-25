function jumpFloor(number) {
    // write code here
    if (number === 0 || number === 1) {
        return number
    }
    var a = 1, b = 1, temp = 0;
    for (var i = 2; i <= number; i++) {
        temp = a + b;
        a = b;
        b = temp
    }
    console.log(temp);
}
