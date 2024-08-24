'use client'
import React, { useEffect, useState } from 'react'

import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import Confetti from 'react-confetti'
import { Button } from '@nextui-org/react';



const Rockpaper =  () => {
  const [userChoice,setUserChoice ] = useState(null)
  const [newRound, setNewRound] = useState(1)
const [RandomNum , setRandomNum] = useState(0)
  
  const handleChange = (choice)=>{
    setUserChoice(choice)
    setNewRound(newRound+1)
    
    
  }
const choice = [
    {name:'rock',icon: <FaHandRock size ={100}onClick={()=>handleChange('rock')}/> },
      {name:'paper',icon: <FaHandPaper size ={100}onClick={()=>handleChange('paper')}/> },
      {name:'scissors',icon: <FaHandScissors size ={100}onClick={()=>handleChange('scissors')}/> },
    ]
    useEffect(()=>{
      const newNum = Math.floor(Math.random() * choice.length)
      setRandomNum(newNum)
  },[userChoice, newRound])
  const confetti =  <Confetti
  width={1300}
  height={300}
/>

  return ( 
    <div>
      <p className='bg-pink-500 flex justify-center items-center shadow-2xl m-4 h-8'>WELCOME TO SCISSOR, PAPER,ROCK GAME</p>
      <div className='bg-blue-500 flex items-center justify-center m-4 p-4 gap-7	'>
      <div className='bg-purple-600 shadow-lg flex h-72 w-[50%] '>computer
      {userChoice && choice[RandomNum].icon}
      { userChoice && choice[RandomNum].name}
     

      </div>
      <div className='bg-fuchsia-500 flex h-72 w-[50%] shadow-lg rounded-xl items-center justify-center'>
        {userChoice}
        {choice.map((item)=> {
          return <div className=' bg-slate-300 border border-black rounded-medium  gap-5 p-4 border-s-8 border-double'>
            {item.icon}</div>
        })}




      
      
         </div>

      
      </div>
      { choice[RandomNum].name ===  userChoice && "DRAW" } 
        { choice[RandomNum].name === 'paper' &&  userChoice=== 'rock' && "You lost" } 
        { choice[RandomNum].name === 'scissor' &&  userChoice=== 'paper' && "You lost" } 
        { choice[RandomNum].name === 'rock' &&  userChoice=== 'scissor' && "You lost" } 
        
        { choice[RandomNum].name === 'rock' &&  userChoice=== 'paper' && confetti} 
        { choice[RandomNum].name === 'paper' &&  userChoice=== 'scissor' && confetti } 
        { choice[RandomNum].name === 'scissor' &&  userChoice=== 'rock' && confetti } 

        <div className='bg-orange-400'>yourscore :</div>
        <div className='bg-orange-400'>computerscore :</div>
        <Button onClick={()=>setUserChoice(null)} className='flex justify-center items-center bg-blue-400 p-4 shadow-xl'>Reset</Button>

      
       </div>

  )
}

export default Rockpaper
