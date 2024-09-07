'use client'
import Sidebar from '@/components/sidebar/page'
import { addToWishlist } from '@/redux/reducerslice/productslice'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const[productList, setproductList] = useState([])
    const fetchProduct =async() => {
     const res= await fetch('https://fakestoreapi.com/products')
     const data = await res.json()
     setproductList(data)
    }
    useEffect(()=>{
fetchProduct()
    },[])
    const {name} = useSelector(state=>state.user)
  return (
    <div>
        <Sidebar/>
        {JSON.stringify(data)}
        {name}
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
    {productList.map((item, index) => (
      <Card shadow="sm" key={index} isPressable onPress={()=>router.push('/product/'+item.id)}>
        <CardBody className="overflow-visible p-0">
        <FaHeart  onClick={() => dispatch(addToWishlist(item))} className='absolute right-4 top-2 z-40'/>

          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={item.title}
            className="w-full object-cover h-[140px]"
            src={item.Image}
          />

        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{item.productName}</b>
          <p className="text-default-500">{item.price}</p>
        </CardFooter>
      </Card>
    ))}
  </div>
    </div>
 
  )
}

export default Product