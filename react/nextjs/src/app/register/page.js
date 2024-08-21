'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Card, CardBody, DatePicker, Input } from '@nextui-org/react';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Register = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange }) => (
        <div className='flex justify-center item-center bg-purple-400 bg-gradient-to-r'>
         <Card className=' w-96 pl-px m-12'>
         <CardBody className='flex gap-3'>
         <p className='bg-teal-400 w-dvw min-h-20 p-px rounded-s-xl '>Registeration Form</p>
        <Form>
          <Input name="firstName" onChange={handleChange} placeholder=' First Name' />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Input name="lastName" onChange={handleChange}  placeholder='Last Name' />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Input  name="email" type="email" onChange={handleChange} placeholder='Email'/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <DatePicker label="Birth date"/>
          <Input name='password' placeholder='password'onChange={handleChange} type='password' />
           {errors.password && touched.password  ?( <div>{}errors.password</div>
           ) : null}
           <Input name=' confirm password' placeholder='confirm password'onChange={handleChange} type='password' />
           {errors. password  && touched. password  ?( <div>{}errors.confirm password</div>
           ) : null}
          <button type="submit">Submit</button>
        </Form>
        </CardBody>
        </Card>
        </div>
      )}
    </Formik>
  </div>
);
export default Register


// import { Button, Card, CardBody, DateInput, DatePicker, Input } from '@nextui-org/react'
// import React from 'react'

// const Register=()=> {
//   return (
//     <div className='flex justify-center item-center bg-purple-400 bg-gradient-to-r'>
//       <Card className=' w-96 pl-px m-12'>
//         <CardBody className='flex gap-3'>
//       <p className='bg-teal-400 w-dvw min-h-20 p-px rounded-s-xl '>Registeration Form</p>
//       <div >
//       <Input placeholder=' First Name'/><br/>
//       <Input placeholder='Last Name' /><br/>
//       <Input placeholder='Email' /> <br/>
//       <DatePicker label="Birth date"/><br/>
//       <Input placeholder='password' type='password' /><br/>
//       <Input placeholder='confirm password' type='password' /><br/>
//       </div>
//       <Button className='bg-teal-400 text-black'>Register</Button>

//       <p> Already have a account? <a href='/'>Login here </a>instead</p>
//       </CardBody>
//       </Card>
//     </div>
//   )
// }

// export default Register

