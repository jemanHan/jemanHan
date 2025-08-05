const DB = [];

function saveDB(user){
    const oldDBSize = DB.length + 1;
    DB.push(user)
    console.log(`save ${user.name} to DB`)
    return new Promise((resolve, reject)=> { //콜백 대신 Promise 객체 반환
if (DB.length > oldDBSize){
    resolve(user)
}else{
    reject(new Error("Save DB Error!")) // 실패 시 에러 발생
}
    })
}

function sendEmail(user){
    console.log(`email to ${user.email}`)
    return new Promise((resolve)=> {  // Promise 객체를 반환. 실패 처리 없음
        resolve(user);
    });
}

function getResult(user){
    return new Promise((resolve, reject)=> {  // Promise 객체 반환
        resolve(`success register ${user.name}`); // 성공 시 성공 메시지와 유저명 반환
    });
}

function registerByPromise(user){
    //비동기 호출이지만, 순서를 지켜 실행함
    const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch(error => new Error(error))
    .finally(() => console.log("완료!"))
    //아직 완료 전이므로 지연(Pending) 상태임
console.log(result)
return(result)
}

const myUser = {email: "andy@test.com", password:"1234", name: "andy"}
const result = registerByPromise(myUser)
//결괏값이 Promise 이므로 then() 메서드에 함수를 넣어서 결괏값을 볼 수 있다
result.then(console.log)

allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)])
allResult.then(console.log)