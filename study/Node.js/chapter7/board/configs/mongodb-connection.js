const {MongoClient} = require("mongodb")

const uri = "mongodb+srv://0523jeman:WH5ToDPoiDKbWNrW@cluster0.8xdkfpo.mongodb.net/board";

module.exports = function (callback) {// 몽고 DB 커넥션 연결 함수 반환

return MongoClient.connect(uri, callback);
}