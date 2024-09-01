import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './reducerslice/counterslice'
import  boxSlice  from './reducerslice/boxslice'
import productslice from '@/app/product/page'
import { userslice } from '@nextui-org/react'

export default configureStore({
  reducer: {
    counter: counterSlice,
  box: boxSlice,
  product: productslice,
  user:userslice
  },
})