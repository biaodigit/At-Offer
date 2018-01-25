function ListNode(x) {
    this.val = x;
    this.next = null;
}

function merge(pHead1, pHead2) {
    if (!pHead1) {
        return pHead2 ? pHead2 : null
    }
    if (!pHead2) {
        return pHead1 ? pHead1 : null
    }
    let list = new ListNode(-1),
        curr = list
    while (pHead1 && pHead2) {
        if (pHead1.val < pHead2.val) {
            curr.next = pHead1
            pHead1 = pHead1.next
        } else {
            curr.next = pHead2
            pHead2 = pHead2.next
        }
        curr = curr.next
    }
    if (pHead1) {
        curr.next = pHead1
    }
    if (pHead2) {
        curr.next = pHead2
    }
    curr = list.next
    list = null
    return curr
}