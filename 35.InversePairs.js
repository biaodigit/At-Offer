function InversePairs(array) {
    if (!array || array.length < 2) return 0
    var copy = array.slice(0),
        count = mergeSort(copy, array, 0, array.length - 1)
    return count % 1000000007
}

function mergeSort(copy, arr, l, r) {
    if (l >= r) return 0

    var mid = (r + l) >> 1,
        leftCount = mergeSort(arr, copy, l, mid),
        rightCount = mergeSort(arr, copy, mid + 1, r),
        i = mid,
        j = r,
        index = r,
        count = 0;
    while (i >= l && j > mid) {
        if (arr[i] > arr[j]) {
            copy[index--] = arr[i--]
            count += j - mid
        }else{
            copy[index--] = arr[j--]
        }
    }
    while (i >= l) {
        copy[index--] = arr[i--]
    }
    while (j >= mid + 1) {
        copy[index--] = arr[j--]
    }
    return leftCount + rightCount + count
}
