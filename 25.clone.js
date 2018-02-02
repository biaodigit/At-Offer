function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead) {
    if (!pHead) return null
    let current = pHead
    while (current) {
        let node = new RandomListNode(current.label)
        node.next = current.next
        current.next = node
        current = node.next
    }
    current = pHead
    while (current) {
        let node = current.next
        if(current.random){
            node.random = current.random.next
        }
        current = node.next
    }
    let cloneNode = pHead.next,
        temp = cloneNode;
    current = pHead;
    while(current){
        current.next = temp.next
        if(temp.next){
            temp.next = temp.next.next
        }
        current = current.next
        temp.next = temp.next
    }
    return cloneNode
}