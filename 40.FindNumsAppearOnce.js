function FindNumsAppearOnce(array){
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var list = []
    for(var i=0;i<array.length;i++){
        if(array.indexOf(array[i]) === array.lastIndexOf(array[i])){
            list.push(array[i])
        }
    }
    return list
}