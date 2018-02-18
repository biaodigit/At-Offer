function TreeDepth(pRoot){
    // write code here
    if(!pRoot){
        return 0
    }

    return Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right)) + 1
}