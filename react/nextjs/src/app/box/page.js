'use client'
import { changebackgroundColor, changeToCircle ,changeTorectangle,increaseWidth, moveBottom, moveLeft, moveRight, moveUp} from '@/redux/reducerslice/boxslice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const dispatch = useDispatch()
    const {padding, width, height,margin,borderRadius,backgroundColor,marginLeft,marginRight,marginTop} = useSelector((state) => state.box)
    const handleChange=(event)=>{
      if(event.key==="Enter"){
        dispatch(changebackgroundColor(event.target.value));
      }
    }
  return (
    <div>
       <div>
        {/* <Input type='text' placeholder='changebackgroundcolor' onKeyPress={handleChange}/> */}
       </div>
        <div
        onClick={()=>dispatch(changeToCircle)}
      
        style={{backgroundColor:backgroundColor, width:width, margin:margin, height:height, borderRadius: borderRadius,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop}}>

        </div>

        {/* <input placeholder="Property:value" className='text-black'/> */}
        <button onClick={()=> dispatch(changeToCircle())} className='gap bg-slate-600 w-[15%] p-4 m-4 rounded-lg '>Change to cirlce</button>
        <button onClick={()=> dispatch(changeTorectangle())} className='gap m-3 p-3 bg-slate-700 w-[15%] rounded-lg'>Change to rectangle</button> 

        <button onClick={()=> dispatch(changeToCircle())}className='gap m-3 p-3 bg-slate-700 w-[15%] rounded-lg' >margin+</button>
        <button onClick={()=> dispatch(increaseWidth())}className='gap m-3 p-3 bg-slate-700 w-[15%] rounded-lg' >margin-</button>
        <Input type='text' placeholder='Property:value' onKeyPress={handleChange}/>
        <Button onClick={()=> dispatch(moveLeft())}><FaArrowLeft/></Button>
        <Button onClick={()=> dispatch(moveRight())}><FaArrowRight/></Button>
        <Button onClick={()=> dispatch(moveUp())}><FaArrowUp/></Button>

        <Button onClick={()=> dispatch(moveBottom())}><FaArrowDown/></Button>

    </div>
  )
}


export default Box
