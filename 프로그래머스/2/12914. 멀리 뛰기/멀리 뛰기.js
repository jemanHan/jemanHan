function solution(n) {
    var answer = 0;
    var dp = [];
    const MOD = 1234567;

    dp[0] = 1; // 0칸: 1가지 방법 (아무것도 안 뛰기)
    dp[1] = 1; // 1칸: 1가지 방법 (1칸)

    for (var i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }

    answer = dp[n];
    return answer;
}
