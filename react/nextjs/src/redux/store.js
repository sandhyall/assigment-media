import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './reducerslice/counterslice'
import  boxSlice  from './reducerslice/boxslice'
import productslice from './reducerslice/productslice'
import { userSlice } from './reducerslice/userslice'


export default configureStore({
  reducer: {
    counter: counterSlice,
  box: boxSlice,
  product: productslice,
  user: userSlice
  },
})