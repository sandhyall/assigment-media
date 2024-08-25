import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
const Reduxprovider = ({children}) => {
  return (
    <Provider store={store}>
    <App />
  </Provider>
  )
}

export default Reduxprovider