function solution(s) {
    var answer = [];

    var A = 0 //한 반복에서 제거된 0의 개수
    var B = 0 //이진 변환 횟수 (return)
    var C = 0 //제거 후 다음 반복에서 s가 될 배열 길이
    var D = 0 //제거한 0 누적 (return)
    //=================
    while(s !== "1"){ // 문제의 조건
    var ex = s // s 문자열의 복사본 ex

    var del = ex.split("0"); // 0 제거
    var fil = del.filter(Boolean); //빈 값 제거
    var sum = fil.join("") // 0 다 날린 문자열 
    
    A = ex.length - sum.length //제거한 0의 개수 'answer의 A'
    C = ex.length - A // C는 0 제거 후 길이
    
   var transNum = Number(C); //남은 문자 1 갯수 >> 길이 숫자 변환
   var num = C.toString(2) //10진 >>  2진 변환
   s = num  //다음 반복 s 재정의 
   B = B+1; //변환 횟수 'answer의 B' (return)
   D = D + A //제거된 0 개수 누적 (return)
    }
 //=========================================================
    answer = [B, D]
    return (answer)
}