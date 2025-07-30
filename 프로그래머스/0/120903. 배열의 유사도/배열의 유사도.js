function solution(s1, s2) {
    // 이번 문제는 틀림
    // s1.filter = s1 배열을 하나씩 확인
    // s2.includes(item) = s2 배열 안에 item이 존재하는지 확인
    return s1.filter(item => s2.includes(item)).length;
}