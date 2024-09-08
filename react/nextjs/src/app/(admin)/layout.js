import Sidebar from '@/component/Sidebar/page'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Adminlayout=({children})=> {
  return (
    
    <div className='flex text-black bg-slate-50 shadow-lg rounded-lg' >
      <Sidebar/>
      <Toaster
      position="top-center"
      reverseOrder= {false}
      />
      {children} </div>
  )
}


export default Adminlayout