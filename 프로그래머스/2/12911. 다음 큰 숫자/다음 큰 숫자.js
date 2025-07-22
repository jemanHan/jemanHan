function solution(n) {
    var answer = 0;
    var sub = n+1 //가장 작은값을 찾기 위한 n보다 큰 복사본 
    // 주어진 n값 => 2진수 변환, 1의 갯수가 같아야 함
    // var Num = parseInt(Str1, 2) // 2진수를 10진수로
    var Str1 = n.toString(2) //n을 2진수로 (고정 값)
X = 0
Y = 1
while(X !== Y)  { // 조건문
     var Str2 = sub.toString(2) // sub를 2진수로 (가변값)
       var count1 = {};
for (const a of Str1) {
count1[a] = (count1[a] || 0) + 1;}
   
    var count2 = {};
for (const v of Str2) {
count2[v] = (count2[v] || 0) + 1;}
     X = count1[1]
     Y = count2[1]

  
sub = sub + 1;
}
    answer = sub - 1
     return answer;
}