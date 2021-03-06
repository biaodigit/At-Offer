function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTree(pre, vin) {
    // write code here
    if (!pre.length || !vin.length) {
        return 0
    }
    var index = vin.indexOf(pre[0])
    var left = vin.slice(0, index)
    var right = vin.slice(index + 1)
    var node = new TreeNode(vin[index])
    node.left = reConstructBinaryTree(pre.slice(1, index + 1), left)
    node.right = reConstructBinaryTree(pre.slice(index + 1), right)
    return node
}
