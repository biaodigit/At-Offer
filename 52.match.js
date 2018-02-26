function match(s, pattern) {
    let regex = new RegExp('^' + pattern + '$')
    return regex.test(s)
}