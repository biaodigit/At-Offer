function Print(pRoot) {
    // write code here
    if (!pRoot) return []
    let queue = [],
        res = [];
    queue.push(pRoot)
    while (queue.length) {
        let size = queue.length,
            temp = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            temp.push(node.val)
        }
        res.push(temp)
    }
    return res
}