function duplicate(numbers, duplication)
{
    var length = numbers.length;
    var obj={};
    for(var i=0;i<length;i++){
        if(numbers[i] in obj){
            duplication[0]=numbers[i];
            return true;
        }else{
            obj[numbers[i]]=1;
        }
    }
    return false;
}