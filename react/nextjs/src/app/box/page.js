'use client'
import { changebackgroundColor, changeToCircle ,changeTorectangle,changeToShape,decreaseWidth,increaseWidth, moveBottom, moveLeft, moveRight, moveUp} from '@/redux/reducerslice/boxslice'
import { Button, Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const dispatch = useDispatch()
    const [customStyles, setCustomStyles] = useState({})
    const {padding, width, height,margin,borderRadius,backgroundColor,marginLeft,marginRight,marginTop,position} = useSelector((state) => state.box)
    const area = borderRadius ? Math.PI * (width/2)**2 : width*height
    const handleChange=(event)=>{
    
      if(event.key==="Enter"){
        dispatch(changebackgroundColor(event.target.value));
      }
    }
    // const handleChange =(e)=> {
    //   let text = e?.target?.value
    //     const output = text.split(',').map((item)=>{
    //       return item.split(':')
    //     })
    //    const styles =  Object.fromEntries(output)
    //    setCustomStyles(styles)
    //   dispatch(changebackgroundColor(e.target.value))
    // }
    useEffect(()=>{
      document.body.addEventListener('keydown',(e)=>{
        console.log(e)
        switch(e.key){
          case'ArrowUp':
          dispatch(moveUp())
          break;
          case'ArrowDown':
          dispatch(moveBottom())
          break;
          case'ArrowRight':
          dispatch(moveRight())
          break;
          case'ArrowLeft':
          dispatch(moveLeft())
          break;
          case'+':
          dispatch(increaseWidth())
          break;
          case '-':
            dispatch(decreaseWidth())
            break;
        }
      })
    },[]
    )

  return (
    <div>
       <div>
        {/* <Input type='text' placeholder='changebackgroundcolor' onKeyPress={handleChange}/> */}
       </div>
        <div
        onClick={()=> dispatch(changeToShape())}
      
        style={{
          position: 'absolute',
          marginTop: marginTop,
          marginLeft: marginLeft,
          backgroundColor:backgroundColor, width:width, margin:margin, height:height, borderRadius: borderRadius,...customStyles}}>

        </div>

        {/* <input placeholder="Property:value" className='text-black'/>
        <button onClick={()=> dispatch(changeToCircle())} className='gap bg-slate-600 w-[15%] p-4 m-4 rounded-lg '>Change to cirlce</button>
        <button onClick={()=> dispatch(changeTorectangle())} className='gap m-3 p-3 bg-slate-700 w-[15%] rounded-lg'>Change to rectangle</button>  */}

        {/* <button onClick={()=> dispatch(decreaseWidth())}className='gap m-3 p-3 bg-slate-700 w-[15%] rounded-lg' >margin-</button>
        <button onClick={()=> dispatch(increaseWidth())}className='gap m-3 p-3 bg-slate-700 w-[15%] rounded-lg' >margin+</button> */}
        
        {/* <Button onClick={()=> dispatch(moveLeft())}><FaArrowLeft/></Button>
        <Button onClick={()=> dispatch(moveRight())}><FaArrowRight/></Button>
        <Button onClick={()=> dispatch(moveUp())}><FaArrowUp/></Button>

        <Button onClick={()=> dispatch(moveBottom())}><FaArrowDown/></Button>
 */}
 <div className='bg-slate-500 rounded-lg w-[15%] p-4 m-3 absoulate bottom-0'>
    <p>area is {area}</p> 
    <Input type='text' placeholder='Property:value' onKeyPress={handleChange}/>
    </div>
    </div>
    
  )
}


export default Box
