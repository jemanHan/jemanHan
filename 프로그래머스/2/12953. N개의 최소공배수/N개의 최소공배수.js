function gcd(a, b) { //최대 공약수
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {  //최소 공배수
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    let answer = arr[0];

    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }

    return answer;
}
