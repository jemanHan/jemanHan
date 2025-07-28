import * as M from '../mongodb'

const connectCB = (db:M.MongoDB) => {
    console.log('db', db)
}
const connectTest = () => {
    M.ConnectAndUseDB(connectCB,'ch07')
}

connectTest()