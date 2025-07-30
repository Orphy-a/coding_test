# javascript coding_test

자바스크립트 filter
배열 내에서 특정 조건을 만족하는 요소들만 골라내어 새로운 배열로 반환하는 내장 메서드

ex) 짝수만 추출
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filternumbers = numbers.filter(function(number){
  return number % 2 === 0;
})
