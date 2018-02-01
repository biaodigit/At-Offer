function FindPath(root, expectNumber) {
    let res = [];
    if (expectNumber.length) return []
    DFS(root, expectNumber, [], 0, res)
    return res
}

function DFS(node, expectNumber, path, currentSum, result) {
    if (!node) return null
    path.push(node.val)
    currentSum += node.val
    if (currentSum === expectNumber && node.left === null && node.right === null) {
        result.push(path.slice(0))
        return
    }
    if (node.left) {
        DFS(node.left, expectNumber, path, currentSum, result)
    }
    if (node.right) {
        DFS(node.right, expectNumber, path, currentSum, result)
    }
    path.pop()
}