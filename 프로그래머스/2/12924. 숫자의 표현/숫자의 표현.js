// n,k,x는 모두 양의 자연수, 2n = k(2x + k - 1)을 만족하는 (k,x)의 개수

    function solution(n) {
    var answer = 0;

    for (let k = 1; k <= n; k++) {
        let numerator = n - (k * (k - 1)) / 2;
        if (numerator <= 0) break;

        if (numerator % k === 0) {
            answer++;
        }
    }

    return answer;
}
