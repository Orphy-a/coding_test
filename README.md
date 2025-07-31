# javascript coding_test

자바스크립트 filter
배열 내에서 특정 조건을 만족하는 요소들만 골라내어 새로운 배열로 반환하는 내장 메서드

ex) 짝수만 추출
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filternumbers = numbers.filter(function(number){
  return number % 2 === 0;
})


자바스크립트 map
배열에서 자주 사용하는 함수로 배열의 각 요소에 주어진 콜백 함수를 적용한 결과로 새로운 배열을 만듦

ex) 
function solution(strlist){
  return strlist.map((el) => el.length);
}

strlist.map // strlist 배열 수 만큼 반복
