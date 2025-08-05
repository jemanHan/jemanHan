const axios = require("axios")
const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json"

axios
.get(url)
.then((result) => {
    if (result.status !=200) {
        throw new Error(" 요청 실패!")
    }

    if (result.data) {
        return result.data
    }
    throw new Error("데이터 없음")
})
.then((data)=> {
    if(!data.articleList || data.articleList.size == 0){ //크기가 0 이면 에러
        throw new Error("데이터 없음")
    }
    return data.articleList // 영화 리스트 반환
})
.then((articles)=> {
    return articles.map((article,idx)=> { //영화 리스트 제목, 순위정보 분리
return {title: article.title, rank: idx +1}
    })
})
.then((results)=>{
    for (let movieInfo of results) { // 받은 영화 리스트 정보 출력
        console.log(`[${movieInfo.rank}위] ${movieInfo.title}`)
    }
})
.catch((err)=> { //중간 발생 에러 여기서 처리
console.log("<<에러 발생>>")
console.error(err)
})
