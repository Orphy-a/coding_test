function solution(age) {
  const map = {0:'a', 1:'b', 2:'c', 3:'d', 4:'e', 5:'f', 6:'g', 7:'h', 8:'i', 9:'j'};
  const ageArr = age.toString().split("");
  let result = "";

  for (let num of ageArr) {
    result += map[num];
  }

  return result;
}