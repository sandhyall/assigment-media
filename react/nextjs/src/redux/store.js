import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './reducerslice/counterslice'

export default configureStore({
  reducer: {
    counter: counterSlice
  },
})