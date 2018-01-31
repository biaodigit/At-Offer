function IsPopOrder(pushV, popV) {
    let stack = [],
        i = 0,
        j = 0;
    while (i < pushV.length) {
        stack.push(pushV[i++])
        while (stack.length && stack[stack.length-1] === popV[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0
}