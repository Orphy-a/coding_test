function solution(array) {
    
    let max = 0
    let maxIndex = 0;
    
    for(let i = 0;i< array.length;i++){
        if(max < array[i]){
            max = array[i];
            maxIndex = i;
        }
    }
    
    return [max, maxIndex];
    
}