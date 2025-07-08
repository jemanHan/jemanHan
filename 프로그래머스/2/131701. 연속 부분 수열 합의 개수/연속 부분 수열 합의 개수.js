function solution(elements) {
    const n = elements.length; // 원래 배열의 길이를 저장 (원형 수열의 길이)

    const set = new Set(); // 중복 제거를 위한 Set 객체 생성

    // 원형 수열을 처리하기 위해 배열을 두 번 이어 붙임
    // 예: [7, 9, 1] -> [7, 9, 1, 7, 9, 1]
    const doubleArr = elements.concat(elements);

    // 부분 수열의 길이를 1부터 n까지 반복
    for (let len = 1; len <= n; len++) {

        // 각 시작 인덱스를 0부터 n-1까지 반복 (원형이기 때문에 n까지만)
        for (let start = 0; start < n; start++) {

            let sum = 0; // 현재 부분 수열의 합 초기화

            // 현재 시작점에서 길이 len만큼 합을 구함
            for (let i = start; i < start + len; i++) {
                sum += doubleArr[i]; // 원형 수열이므로 doubleArr를 참조
            }

            set.add(sum); // 중복되지 않은 합만 저장됨
        }
    }

    // Set에 저장된 합의 개수 = 중복 제거된 연속 부분 수열의 합의 개수
    return set.size;
}
