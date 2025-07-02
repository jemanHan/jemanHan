function solution(s) {
    let arrays = s.split(" ").map(Number); // 문자열을 숫자 배열로 변환

    let min = Math.min(...arrays);
    let max = Math.max(...arrays);

    return `${min} ${max}`;
}
