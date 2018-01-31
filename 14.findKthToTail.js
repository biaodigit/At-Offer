function FindKthToTail(head, k) {
    if (!head || k <= 0) {
        return false
    }
    let i = head, j = head;
    while (--k) {
        j = j.next
        if (!j) {
            return null
        }
    }
    while (j.next) {
        i = i.next
        j = j.next
    }
    return i
}
