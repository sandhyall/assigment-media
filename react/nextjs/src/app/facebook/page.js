'use client'
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { GoThumbsup } from "react-icons/go";

const facebook = () => {
  const [reaction, setReaction] = useState(null)
const changeReaction = (newReaction) =>{
  setReaction(newReaction)
}
  return (
    <div>
     <Button className = {reaction=='like'? 'bg-blue-400': null}onClick={()=>changeReaction('like')}> <GoThumbsup /> Like </Button> 
     <Button className = {reaction=='like'? 'bg-blue-400': null}onClick={()=>changeReaction('like')}> <GoThumbsup /> WoW </Button> 
    </div>
  )
}

export default facebook
