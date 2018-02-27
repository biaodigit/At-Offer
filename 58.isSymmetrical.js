function isSymmetrical(pRoot) {
    let Symmetrical = function (root1, root2) {
        if (!root1 && !root2) return true
        if (!root1 || !root2) return false
        if (root1.val !== root2.val) return false
        return Symmetrical(root1.left, root2.right) && Symmetrical(root1.right, root2.left)
    }
    isSymmetrical(pRoot, pRoot)
}