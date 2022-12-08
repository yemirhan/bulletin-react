import { configureStore } from '@reduxjs/toolkit'
import login from './redux/login.reducer'

export const store = configureStore({
  reducer: {
    login,
  },
})