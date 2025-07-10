function solution(people, limit) {
    people.sort((a, b) => a - b); // 몸무게 오름차순 정렬
    let left = 0;                 // 가장 가벼운 사람
    let right = people.length - 1; // 가장 무거운 사람
    let boats = 0;

    while (left <= right) {
        // 가장 가벼운 사람 + 가장 무거운 사람 태울 수 있는 경우
        if (people[left] + people[right] <= limit) {
            left++; // 가벼운 사람도 태움
        }
        // 무거운 사람은 항상 태움
        right--;
        boats++;
    }

    return boats;
}
