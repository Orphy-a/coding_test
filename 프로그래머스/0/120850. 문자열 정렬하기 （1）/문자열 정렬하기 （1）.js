function solution(my_string) {

    const numbers = [...my_string].filter(char => !isNaN(char) && char !== ' ');

    return numbers.map(Number).sort((a, b) => a - b);
}