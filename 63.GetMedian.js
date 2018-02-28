let arr = []

function Insert(num) {
    if (arr.length < 1 || num > arr[arr.length - 1]) {
        arr.push(num)
        return
    }
    if (num <= arr[0]) {
        arr.unshift(num)
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            arr.splice(i, 0, num)
            return
        }
    }
}

function getMedian() {
    let len = arr.length
    if (len % 2) {
        return arr[(len - 1) / 2]
    } else {
        return (arr[len / 2] + arr[(len / 2) - 1]) / 2
    }
}