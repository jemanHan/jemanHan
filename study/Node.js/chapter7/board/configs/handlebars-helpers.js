module.exports = {  
    lengthOfList: (list = []) => list.length,  //리스트 길이 반환
eq: (val1, val2) => val1 === val2,  // 두 값 비교, 같은지 반환 
dateString: (isoString)=> new Date(isoString).toLocaleDateString(),  //날짜만 반환
}