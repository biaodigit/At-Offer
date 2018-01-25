function minNumberInRotateArray(rotateArray) {
    if (!rotateArray.length) {
        return 0
    }
    return Math.min.apply(null, rotateArray)
}
