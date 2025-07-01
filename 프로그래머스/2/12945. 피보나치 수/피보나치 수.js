function solution(n) {
    const num = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        num[i] = (num[i - 1] + num[i - 2]) % 1234567;
    }
    
    return num[n];
}






// 0 1 1 2 3 5 8 13 21 34 55 89 .....