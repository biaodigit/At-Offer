function GetNext(pNode) {
    if (!pNode) return null
    if (pNode.right) {
        let p = pNode.right
        while (p.left) {
            p = p.left
        }
        return p
    }
    while (pNode.next) {
        if (pNode === pNode.next.left) {
            return pNode.next
        }
        pNode = pNode.next
    }
}