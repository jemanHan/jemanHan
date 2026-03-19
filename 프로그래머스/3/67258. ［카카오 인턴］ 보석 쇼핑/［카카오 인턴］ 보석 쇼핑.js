function solution(gems) {
    const gemCount = new Set(gems).size;
    let answer = [1, gems.length];
    let hitMap = new Map();
    let left = 0;

    for (let right = 0; right < gems.length; right++) {
        
        hitMap.set(gems[right], (hitMap.get(gems[right]) || 0) + 1);

        while (hitMap.size === gemCount) {
            
            if (right - left < answer[1] - answer[0]) {
                answer = [left + 1, right + 1];
            }

            
            const lGem = gems[left]; 
            const currentCount = hitMap.get(lGem);

            if (currentCount === 1) {
                hitMap.delete(lGem); // 
            } else {
                hitMap.set(lGem, currentCount - 1); 
            }

            left++; 
        }
    }
    return answer;
}