function VerifySquenceOfBST(sequence) {
    if (!sequence) return false
    return judge(sequence, 0, sequence.length - 1)
}

function judge(arr, l, r) {
    if (l >= r) return true
    let i = r;
    while (arr[i - 1] > arr[r]) --i
    for (let j = i - 1; j >= l; j--) {
        if (arr[j] > arr[r]) return false
    }
    return judge(arr, l, i - 1) && judge(arr, i, r - 1)
}