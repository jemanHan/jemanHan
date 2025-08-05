const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Person = require ('./person-model.js')

mongoose.set("strictQuery", false)

const app = express()
app.use(bodyParser.json())  //HTTP에서 Body 파싱하기 위한 설정임
app.listen(3000, async() => {
    console.log("Server started")
    const mongodbUri = "mongodb+srv://0523jeman:WH5ToDPoiDKbWNrW@cluster0.8xdkfpo.mongodb.net/test?retryWrites=true&w=majority"


mongoose
.connect(mongodbUri, {useNewUrlParser: true})
.then(console.log("Coneccted to MongoDB"))
});

//모든 person 데이터 출력
app.get("/person", async (req,res)=> {
    const person = await Person.find({})
    res.send(person)
})

//특정 이메일로 person 찾기
app.get("/person/:email", async (req,res)=> {
    const person = await Person.findOne({email: req.params.email})
    res.send(person)
})

//person 데이터 추가
app.post("/person", async (req,res)=> {
    const person = new Person(req.body)
    await person.save()
    res.send(person)
})

app.put("/person/:email", async (req,res)=> {
    const person = await Person.findOneAndUpdate(
        { email: req.params.email },
        {$set:req.body},
        {new: true}
    )
    console.log(person)
    res.send(person)
})

app.delete("/person/:email", async (req,res)=> {
   await Person.deleteMany({email: req.params.email})
   res.send({success: true})
})