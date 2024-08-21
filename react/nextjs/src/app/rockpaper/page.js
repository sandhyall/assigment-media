'use client'
import React, { useState } from 'react'

import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import Confetti from 'react-confetti'



const Rockpaper =  () => {
  const [userScore,setUserScore] = useState(0)
  const [computerscore,setcomputerScore] = useState(0)

  const [userChoice,setUserChoice ] = useState(null)
  const handleChange = (choice)=>{
    setUserChoice(choice)
    
    
  }
  const checkWin = ()=>{
    

  }

  const choice = [
    {name:'rock',icon: <FaHandRock size ={100}onClick={()=>handleChange('rock')}/> },
      {name:'paper',icon: <FaHandPaper size ={100}onClick={()=>handleChange('paper')}/> },
      {name:'scissors',icon: <FaHandScissors size ={100}onClick={()=>handleChange('scissors')}/> },
    ]
  const randomNum = Math.floor(Math.random() * choice.length)
  const confetti = <Confetti
  width={1300}
  height={300}
/>
  return ( 
    <div>
      <p className='bg-pink-500 flex justify-center items-center shadow-2xl m-4 h-8'>WELCOME TO SCISSOR, PAPER,ROCK GAME</p>
      <div className='bg-blue-500 flex items-center justify-center m-4 p-4 gap-7	'>
      <div className='bg-purple-600 shadow-lg flex h-72 w-[50%] '>computer
      {userChoice && choice[randomNum].icon}
      { userChoice && choice[randomNum].name}

      </div>
      <div className='bg-fuchsia-500 flex h-72 w-[50%] shadow-lg rounded-xl items-center justify-center'>
        {userChoice}
        {choice.map((item)=> {
          return <div className=' bg-slate-300 border border-black rounded-medium  gap-5 p-4 border-s-8 border-double'>
            {item.icon}</div>
        })}




      
      
         </div>

      
      </div>
      { choice[randomNum].name ===  userChoice && "DRAW" } 
        { choice[randomNum].name === 'paper' &&  userChoice=== 'rock' && "You lost" } 
        { choice[randomNum].name === 'scissor' &&  userChoice=== 'paper' && "You lost" } 
        { choice[randomNum].name === 'rock' &&  userChoice=== 'scissor' && "You lost" } 
        
        { choice[randomNum].name === 'rock' &&  userChoice=== 'paper' && confetti} 
        { choice[randomNum].name === 'paper' &&  userChoice=== 'scissor' && confetti } 
        { choice[randomNum].name === 'scissor' &&  userChoice=== 'rock' && confetti } 

        <div className='bg-orange-400'>your score :</div>
        <div className='bg-orange-400'>computerscore :</div>
        

      
       </div>

  )
}

export default Rockpaper
