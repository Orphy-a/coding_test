function gcd(a, b) {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n) {
  return lcm(n, 6) / 6;
}