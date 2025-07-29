function solution(numbers, num1, num2) {
    // slice : 배열의 특정구간을 잘라낸다.
    const a = numbers.slice(num1, num2+1);
    return a;
}