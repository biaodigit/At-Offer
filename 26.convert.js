function convert(pRootOfTree) {
    if (!pRootOfTree) return null
    let stack = [],
        p = pRootOfTree,
        pre,
        isFirst;
    while (true) {
        if(p){
            stack.push(p)
            p = p.next
        }
        if(stack.length === 0) break
        p = stack.pop()
        if(isFirst){
            pRootOfTree = p
            pre = p
            isFirst = false
        }else{
            pre.right = p
            p.left = pre
            pre = p
        }
    }
    return pRootOfTree
}