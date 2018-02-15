function InversePairs(array) {
    if (!array || array.length < 2) return 0
    var copy = array.slice(0),
        count = mergeSort(array, copy, 0, array.length - 1);
    return count % 1000000007
}

function mergeSort(arr, copy, start, end) {
    if (start >= end) {
        return 0
    }

    var mid = (start + end) >> 1,
        leftCount = mergeSort(copy, arr, start, mid),
        rightCount = mergeSort(copy, arr, mid + 1, end),
        i = mid,
        j = end,
        index = end,
        count = 0;
    while (i >= start && j >= mid + 1) {
        if (arr[i] > arr[j]) {
            copy[index--] = arr[i--]
            count += j - mid
        } else {
            copy[index--] = arr[j--]
        }
    }
    while (i >= start) {
        copy[index--] = arr[i--]
    }
    while (j >= mid + 1) {
        copy[index--] = arr[j--]
    }
    return leftCount + rightCount + count
}