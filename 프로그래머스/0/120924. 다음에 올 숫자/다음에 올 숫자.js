function solution(common) {
    var answer = 0;
    
    ComL = common.length
    
   
   var A = common[1] - common[0]
   var B = common[2] - common[1]
   var C = (common[1] / common[0])
   var D = B - A
   
   if(D == 0) 
       {
           common[ComL] = common[ComL-1] + A
       }
    if(D !==0) {
        common[ComL] = common[ComL-1] * C
    }

   answer = common[ComL]

    return answer;
    
    
    
}