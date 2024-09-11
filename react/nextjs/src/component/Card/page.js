import CategoryList from '@/app/(admin)/categories/CategoryList'
import { Image } from '@nextui-org/react'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const Card=(props)=> {
  return (
    <div>
       <div className='p-4 bg-pink-50 shadow-md text-2xl font-semibold font-mono justify-center content-center'>
                {props.item.name}
                <Image src={props.item.image}  width={100 } height={100}  alt="category"/>
                <CategoryList type='edit' item = {props.item}/>
                {props.item.id}
                <FaTrash onClick={()=>props.handleDelete(props.item.id)} />
        </div> 
        </div>
  )
}

export default Card