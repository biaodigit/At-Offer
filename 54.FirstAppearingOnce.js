//Init module if you need
var result
function Init()
{
    // write code here
    result = {}
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if(result[ch]){
        result[ch]++
    }else{
        result[ch] = 1
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(var key in result){
        if(result[key] === 1){
            return key
        }
    }
    return '#'
}