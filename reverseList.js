function ReverseList(pHead) {
    if (!pHead) {
        return
    }
    let next, pre;
    while (pHead) {
        next = pHead.next
        pHead.next = pre
        pre = pHead
        pHead = next
    }
    return pre
}
