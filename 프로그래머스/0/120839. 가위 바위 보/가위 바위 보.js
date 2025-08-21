function solution(rsp) {
    let result = '';
    for (let char of rsp) {
        if (char === '2') result += '0';
        else if (char === '0') result += '5'; 
        else if (char === '5') result += '2';
    }
    return result;
}