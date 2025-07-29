import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const middleware: any[] = []

  // 개발 환경일 때만 logger 추가
  if (useLogger) {
    middleware.push(logger)
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      middleware.length > 0
        ? getDefaultMiddleware().concat(middleware)
        : getDefaultMiddleware()
  })

  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
