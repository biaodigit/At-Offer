/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let res = []
function Serialize(pRoot) {
    if(!pRoot){
        res.push('#')
    }else{
        res.push(pRoot.val)
        Serialize(pRoot.left)
        Serialize(pRoot.right)
    }
}

function Deserialize(arr) {
    let node = null
    if(arr.length < 1){
        return node
    }
    let num = arr.shift()
    if(typeof num === 'number'){
        node = new TreeNode(num)
        node.left = Deserialize(arr)
        node.right = Deserialize(arr)
    }
    return node
}