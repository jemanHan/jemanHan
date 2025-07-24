function solution(brown, yellow) {
    var answer = [];
    //조건 나열
    //가로가 세로보다 같거나 큼
    // (Height - 2) * (Width - 2)가 yellow 를 만족시켜야 함
    var plus = brown + yellow;
 
    
for (H=3; H<brown; H++){
    if(plus % H === 0){
        W = plus / H
        if((H-2)*(W-2) === yellow){
    return answer =  [W, H]
       
}
        }
}
    
    
 
    
   
    return answer
}