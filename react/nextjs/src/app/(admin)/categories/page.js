'use client'
import axios from 'axios'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import CategoryForm from './CategoryForm'
import { Image } from '@nextui-org/react'
import CategoryList from './CategoryList'

const Categories = async() => {
    
  
  return (
    <div className=''>
        <CategoryForm/>
        <CategoryList/>
     
    </div>
  )
}

export default Categories