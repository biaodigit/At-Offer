function EntryNodeOfLoop(pHead) {
    // write code here
    let p1 = pHead,
        p2 = pHead;
    while (p1.next && p2.next.next) {
        p1 = p1.next
        p2 = p2.next.next
        if (p1 === p2) break
    }
    if (p1 !== p2) return false
    let p3 = pHead,
        p4 = p1
    while (p3 !== p4) {
        p3 = p3.next
        p4 = p4.next
    }
    return p3
}