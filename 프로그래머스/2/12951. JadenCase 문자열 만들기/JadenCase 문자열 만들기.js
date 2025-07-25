function solution(s) {
    var answer = '';
    low = s.toLowerCase();
    cap = s.toUpperCase();
    var Slice = low.split(' ')
    
    for (let i = 0 ; i<Slice.length ; i++){
         var del = Slice[i].substr(0,1).toUpperCase() //각 배열의 첫글자를 대문자로 바꾼값 저장
        Slice[i] = Slice[i].substr(1)
    Slice[i] = (del + Slice[i])
  }
  answer =  Slice.join(' ')
  
    return answer;
}