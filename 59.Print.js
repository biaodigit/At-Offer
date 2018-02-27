function Print(pRoot) {
    if (!pRoot) return null
    let queue = [],
        res = [],
        count = 0;
    queue.push(pRoot)
    while (queue.length) {
        let len = queue.length,
            temp = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            if (count % 2 === 0) {
                temp.push(node.val)
            } else {
                temp.unshift(node.val)
            }
        }
        res.push(temp)
        count++
    }
    return res
}