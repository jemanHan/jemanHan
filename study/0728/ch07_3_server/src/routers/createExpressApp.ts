import express from 'express'
import type { MongoDB } from './mongodb'
import { authRouter, testRouter, userRouter } from './routers'

export const createExpressApp = (db: MongoDB) => {
  const app = express()

  app.use(express.json()) // JSON 요청 파싱

  app.use('/api', authRouter(db))       // 회원가입, 로그인
  app.use('/api/test', testRouter(db))  // 테스트용 라우터
  app.use('/api/user', userRouter(db))  // 유저 정보 확인용 라우터

  return app
}
