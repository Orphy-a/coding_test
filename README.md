# JavaScript 배열 메서드 정리

## 1. filter
- 배열 내에서 **특정 조건을 만족하는 요소들**만 골라내어, **새로운 배열**로 반환하는 내장 메서드입니다.

### 사용 예시: 짝수만 추출하기

const numbers = [1, 2, 3, 4, 5, 6, 7, 8,Numbers = numbers.filter(function(number) {
return number % 2 === 0;
});
console.log(evenNumbers); //

---

## 2. map
- 배열에서 자주 사용하는 함수로, **배열의 각 요소에 콜백 함수를 적용**한 결과로 **새로운 배열**을 만듭니다.

### 사용 예시: 문자열 배열의 길이 구하기

function solution(strlist) {
return strlist.map((el) => el.length);
}
console.log(solution(["apple", "banana", "kiwi"])); //

- `strlist.map`: strlist 배열의 수만큼 반복하며 각 요소를 콜백 함수에 넣어서 변환 결과를 새로운 배열에 담습니다.

---

## 요약
- **filter** : 원하는 조건을 만족하는 값만 골라 새 배열 생성
- **map** : 각 요소를 내가 원하는 방식으로 바꿔 새 배열 생성
