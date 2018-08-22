function Mirror(root) {
    // write code here
    if (!root) return null
    let stack = [],
        node,
        temp;
    stack.push(root);
    while (stack.length) {
        node = stack.pop();
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
        temp = node.left;
        node.left = node.right;
        node.right = temp;

    }
    return root
}