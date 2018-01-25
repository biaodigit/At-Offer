function HasSubtree(pRoot1, pRoot2) {
    // write code here
    if (!pRoot1 || !pRoot2) {
        return false
    }
    if (isSubTree(pRoot1, pRoot2)) {
        return true
    } else {
        return isSubTree(pRoot1.left, pRoot2) || isSubTree(pRoot1.right, pRoot2)
    }
};

function isSubTree(tree1, tree2) {
    if (!tree2) return true
    if (!tree1) return false
    if (tree1.val === tree2.val) {
        return isSubTree(tree1.left, tree2.left) && isSubTree(tree1.right, tree2.right)
    } else {
        return false
    }
}
