'use client'
import Card from '@/component/Card/page'
import CustomToast from '@/component/CutomToast/page'
import { Image } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaEdit, FaTrash } from 'react-icons/fa'

const CategoryList=()=> {
    const[categories , setCategories] = useState([])
    const fetchdata =async()=>{
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/categories')
        setCategories(data)
    }
   
  const handleDelete =async(item)=>{
 const {data}= await axios.delete('https://api.escuelajs.co/api/v1/categories/'+item.id)
 
 fetchdata()
 if(data) toast.custom((t)=>(
  <CustomToast t={t} actionImage={item.Image} actionTitle = "Delete categories sucessfully" actionName={item.name}/>
 ))
  }

  useEffect(()=>{
    fetchdata()
    
  },[])

  return (
    <div>
        <div className='flex gap-4'>
        {categories.map((item)=>{
        return <Card item = {item} handleDelete={handleDelete} />
           })}
        </div>
    </div>
  )
}

export default CategoryList
