var stack = [];
function push(node){
    // write code here
    stack.push(node)
}
function pop(){
    // write code here
    stack.pop()
}
function top(){
    // write code here
    return stack[stack.length-1]
}
function min(){
    // write code here
    return Math.min.apply(null,stack)
}