function printListFromTailToHead(head) {
    // write code here
    if (!head) {
        return 0
    } else {
        var arr = []
        arr.push(head.val)
        while (head.next) {
            head = head.next
            arr.push(head.val)
        }
    }
    return arr.reverse()
}
