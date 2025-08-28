function solution(n) {
    let count = 0;

    for (let i = 4; i <= n; i++) {
        let divisorCount = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;
            }
            if (divisorCount > 2) {
                count++;
                break;
            }
        }
    }

    return count;
}