function FindFirstCommonNode(pHead1, pHead2) {
    if (!pHead1 || !pHead2) return null
    var p1 = pHead1,
        p2 = pHead2;
    while (p1 !== p2) {
        p1 = p1 === null ? pHead2 : p1.next
        p2 = p2 === null ? pHead1 : p2.next
    }
    return p1
}