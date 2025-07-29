import type { MongoDB } from '../mongodb'
import { Router } from 'express'

export const userRouter = (db: MongoDB) => {
  const user = db.collection('user')
  const router = Router()

  router.get('/', async (req, res) => {
    try {
      const users = await user.find({}).toArray()
      res.json({ ok: true, body: users })
    } catch (e) {
      if (e instanceof Error) res.json({ ok: false, errorMessage: e.message })
    }
  })

  return router
}
