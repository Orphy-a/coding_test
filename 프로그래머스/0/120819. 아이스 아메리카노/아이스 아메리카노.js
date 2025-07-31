function solution(money) {
    const result = [];
    result[0] = Math.floor(money / 5500);
    result[1] = money % 5500;
    return result;
}