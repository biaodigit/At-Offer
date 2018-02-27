function deleteDuplication(pHead) {
    if (!pHead) return null
    let dummyHead = new ListNode(null)
    dummyHead.next = pHead
    let temp = dummyHead,
        curr = dummyHead.next
    while (curr) {
        while(curr.next && curr.val === curr.next.val){
            curr = curr.next
        }
        if(temp.next === curr){
            temp = curr
            curr = curr.next
        }else{
            temp.next = curr.next
            curr = temp.next
        }
    }
    return dummyHead.next
}