function LeftRotateString(str, n) {
    // write code here
    if (!str) return ""
    return str.slice(n) + str.slice(0, n)
}