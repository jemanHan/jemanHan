function goodPromise(val){
    //Promise를 생성 후 반환
    return new Promise((resolve, reject)=> {
        resolve(val)
    })
}

goodPromise("세상에~")
//promise에서 resolve 이후 then 호출 가능
.then((val)=> {
    return val + " 이런 "
})
.then((val)=> {
    return val + " 코드는 "
})
.then((val)=> {
    return val + " 없어요. "
})
.then((val)=> {
    console.log(val)
})
.catch((err)=> {
    console.log(err)
})