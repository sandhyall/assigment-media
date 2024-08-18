'use client'
import { Button, Card, CardBody, DateInput, DatePicker, Input,  } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const login=()=> {
  const router = useRouter()
  const handleRegister =()=>{
    router.push('home')
  }

  return (

< div className='flex justify-center item-center bg-purple-400 bg-gradient-to-r'>
      <Card className=' w-96 pl-px m-12'>
        <CardBody className='flex gap-3'>
      <p className='bg-teal-400 w-dvw min-h-20 p-px rounded-s-xl '>Login Form</p>
      <div >
      <Input placeholder=' First Name'/><br/>
      <Input placeholder='Last Name' /><br/>
      <Input placeholder='Email' /> <br/>
      
      <Input placeholder='password' type='password' /><br/>

      </div>
      <Button onClick={handleRegister}className='bg-teal-400 text-black'>LogIn</Button>

      <p> Don't have a account? <a href='register'>Register here </a>instead</p>
      <Link href='/forget pasword' className='bg-emerald-300 pb-px flex min-h-4 leading-8'>Forget password</Link>

      </CardBody>
      </Card>
    </div>

  )
}


export default login 

