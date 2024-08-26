import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './reducerslice/counterslice'
import  boxSlice  from './reducerslice/boxslice'

export default configureStore({
  reducer: {
    counter: counterSlice,
  box: boxSlice

  },
})