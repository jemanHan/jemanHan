const express = require("express")
const handlebars = require("express-handlebars")
const app = express();

const postService = require("./services/post-service")
const mongodbConnection = require("./configs/mongodb-connection.js")

app.engine("handlebars", handlebars.engine()) //템플릿 엔진 핸들바 등록
app.set("view engine", "handlebars") // 웹페이지 로드 시 사용할 템플릿 엔진 설정
app.set("views", __dirname + "/views") // 뷰 디렉토리 views 설정
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//라우터 설정
app.get("/", (req,res)=>{
    res.render("home", {title: "테스트 게시판"})
})

app.get("/write", (req,res)=>{
    res.render("write", {title: "테스트 게시판"})
})

app.get("/detail/:id",  async (req,res)=>{
    res.render("detail", {title: "테스트 게시판", })
})

app.post("/write", async (req,res)=>{
    const post = req.body
    //글 쓰기 후 결과 반환
    const result = await postService.writePost(collection,post)
    res.redirect(`/detail/${result.insertedId}`)
})

let collection;
app.listen(3000, async () => {
    console.log("Server started")
    //mongodbConnection의 결과는 mongoClient
    const mongoClient = await mongodbConnection();
    //mongoClient.db()로 디비 선택 collection() 으로 컬렉션 선택 후 collection에 할당
    collection = mongoClient.db().collection("post")
    console.log("MongoDB connected")
})