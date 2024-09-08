// 'use client'
// import { Button, Card, CardBody, DateInput, DatePicker, Input,  } from '@nextui-org/react'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import React from 'react'

// const login=()=> {
//   const router = useRouter()
//   const handleRegister =()=>{
//     router.push('home')
//   }

//   return (

// < div className='flex justify-center item-center bg-slate-50  bg-gradient-to-r'>
//       <Card className=' w-96 pl-px m-12'>
//         <CardBody className='flex gap-3'>
//       <p className='bg-teal-400 w-dvw min-h-20 p-px rounded-s-xl '>Login Form</p>
//       <div >
//       <Input placeholder=' First Name'/><br/>
//       <Input placeholder='Last Name' /><br/>
//       <Input placeholder='Email' /> <br/>
      
//       <Input placeholder='password' type='password' /><br/>

//       </div>
//       <Button onClick={handleRegister}className='bg-teal-400 text-black'>LogIn</Button>

//       <p> Don't have a account? <a href='register'>Register here </a>instead</p>
//       <Link href='/forget pasword' className='bg-emerald-300 pb-px flex min-h-4 leading-8'>Forget password</Link>

//       </CardBody>
//       </Card>
//     </div>

//   )
// }


// export default login 

'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, DatePicker, Input } from '@nextui-org/react';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'password must be 8 character long')
    .required('Required'),
  
});

const Register = () => {
  const handleLogin=async (values)=>{
    const{data}= await axios.post('https://fakestoreapi.com/auth/login',values)
  }
  return(
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        password:'',
      
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        handleLogin(values)
      }}
    >
      {({ errors, touched, handleChange }) => (
        <div className='flex justify-center item-center bg-purple-400 bg-gradient-to-r'>
         <Card className=' w-96 pl-px m-12'>
         <CardBody className='flex gap-3'>
         <p className='bg-teal-400 w-dvw min-h-20 p-px rounded-s-xl '>Registeration Form</p>
        <Form>
          <Input name="username" onChange={handleChange} placeholder=' username' />
          {errors.username && touched.username ? (
            <div>{errors.username}</div>
          ) : null}
          
          <Input name='password' placeholder='password'onChange={handleChange} type='password' />
           {errors.password && touched.password  ?( <div>{}errors.password</div>
           ) : null}

          
<Button className='bg-teal-400 text-black'>Register</Button>
          <p> Don't have a account? <a href='register'>Register here </a>instead</p>
        </Form>
        </CardBody>
        </Card>
        </div>
      )}
    </Formik>
  </div>
  
);
}
export default Register
