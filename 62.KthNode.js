function KthNode(pRoot, k) {
    // write code here
    if (!pRoot)
        return null;
    var res = [];
    inOrder(pRoot, res);
    return res[k - 1] ? res[k - 1] : null;
}

function inOrder(root, arr) {
    if (!root)
        return;
    inOrder(root.left, arr);
    arr.push(root);
    inOrder(root.right, arr);
}