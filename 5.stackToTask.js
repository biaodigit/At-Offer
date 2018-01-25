let task1 = [],
    task2 = [];

function push(node) {
    task1.push(node)
}

function pop() {
    let temp = task1.pop()
    while (temp) {
        task2.push(temp)
        temp = task1.pop()
    }
    let result = task2.pop()
    temp = task2.pop()
    while (temp) {
        task1.push(temp)
        temp = task2.pop()
    }
    return result
}
