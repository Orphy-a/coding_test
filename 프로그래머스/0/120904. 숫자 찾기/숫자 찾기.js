function solution(num, k) {
    
    const str = num.toString();
    
    if(str.indexOf(k) !== -1){
        return str.indexOf(k) + 1;
    }else{
        return -1
    }
    
}