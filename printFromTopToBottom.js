function PrintFromTopToBottom(root){
    // write code here
    if(!root) {
        return []
    }
    let queue = [],
        res = [];
    queue.push(root)
    while(queue.length){
        let node = queue.shift()
        if(node.left !== null ) queue.push(node.left)
        if(node.right !== null ) queue.push(node.right)
        res.push(node.val)
    }
    return res
}