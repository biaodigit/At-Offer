function Permutation(str){
    // write code here
    if(!str.length) return 0
    let arr = str.split("")
    let res = []
    let order = function(arr,str){
        if(arr.length === 0) res.push(str)
        let map = {}
        for(let i=0;i<arr.length;i++){
            if(!map[arr[i]]){
                let p = arr.splice(i,1)[0]
                order(arr,str+p)
                arr.splice(i,0,p)
                map[p] = true
            }
        }
    }
    order(arr,"")
    return res
}