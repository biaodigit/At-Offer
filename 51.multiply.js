function multiply(array){
    // write code here
    if(!array.length) return []
    let res = []
    for(let i=0;i<array.length;i++){
        let tempArr = array.filter(function(val,index){
            return index !== i
        })
        let temp = 1
        tempArr.map(function(el){
            temp *= el
        })
        res[i] = temp
    }
    return res
}