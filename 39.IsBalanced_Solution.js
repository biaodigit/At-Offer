function IsBalanced_Solution(root) {
    if(!root) return true
    var height = function (node) {
        if(!node) return 0

        if(!node.left && !node.right) return 1

        return Math.max(height(root.left),height(root.right)) + 1
    }
    return Math.abs(height(root.left) - height(root,right)) <= 1
}