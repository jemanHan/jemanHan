function solution(k, tangerine) {
  const count = {};

  // 크기별 개수 세기
  for (let t of tangerine) {
    count[t] = (count[t] || 0) + 1;
  }

  // 개수를 내림차순 정렬
  const sorted = Object.values(count).sort((a, b) => b - a);

  // k개 채울 때까지 종류 수 세기
  let answer = 0;
  for (let c of sorted) {
    k -= c;
    answer++;
    if (k <= 0) break;
  }

  return answer;
}
