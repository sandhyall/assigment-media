// 'use client'
// import { Button } from '@nextui-org/react'
// import React, { useState } from 'react'

// const Calculator = () => {
//     const [output, setOutput] = useState('')
//   return (
//     <div className='bg-black w-80 p-2'>
//         <div className='text-white'>{output}</div>
//         <Button className='bg-gray-200' onClick={()=>(setOutput)('')}>AC</Button>
//         <Button className='bg-gray-200' onClick={()=>setOutput(eval(output*-1))}>+/-</Button>
//         <Button className='bg-gray-200'onClick={()=>(setOutput)(output/100)}>%</Button>
//         <Button className='bg-gray-200'onClick={()=>(setOutput)(output + '/')}>/</Button>
//         <Button onClick={()=>setOutput(output+ 9) }>9</Button>
//         <Button onClick={()=>setOutput(output+ 8)}  >8</Button>
//         <Button onClick={()=>setOutput(output+ 7) }>7</Button>
//         <Button className='bg-orange-500'onClick={()=>(setOutput)(output + '*')}>*</Button>
//         <Button onClick={()=>setOutput(output+ 6) }>6</Button>
//         <Button onClick={()=>setOutput(output+ 5) }>5</Button>
//         <Button onClick={()=>setOutput(output+ 4) }>4</Button>
//         <Button className='bg-orange-500' onClick={()=>(setOutput)(output + '-')}>-</Button>
//         <Button onClick={()=>setOutput(output+ 3) }>3</Button>
//         <Button onClick={()=>setOutput(output+ 2) }>2</Button>
//         <Button onClick={()=>setOutput(output+ 1) }>1</Button>
//         <Button onClick={()=>setOutput(output+ '+') } className='bg-orange-500'>+</Button>
//         <Button onClick={()=>setOutput(output+ 0) }>0</Button>
//         <Button onClick={()=>setOutput(output+ '.')}>.</Button>

//       <Button onClick={()=> setOutput(eval(output) )}>=</Button>
//     </div>
//   )
// }

// export default Calculator


// 'use client'
// import { Button } from '@nextui-org/react'
// import React, { useState } from 'react'

// const Calculator = () => {
//     const [output, setOutput] = useState('')
//     const buttons = [
//         [{key: 'AC', className: 'bg-gray-300'},
//         {key: '+/-', className: 'bg-gray-300'},
//         {key: '%', className: 'bg-gray-300'},
//         {key: '/', className: 'bg-orange-300'}],
//         [{key: '7', className: 'bg-gray-300'},
//         {key: '8', className: 'bg-gray-300'},
//         {key: '9', className: 'bg-gray-300'},
//         {key: '*', className: 'bg-orange-300'}],
//         [{key: '4', className: 'bg-gray-300'},
//         {key: '5', className: 'bg-gray-300'},
//         {key: '6', className: 'bg-gray-300'},
//         {key: '-', className: 'bg-orange-300'}],
//         [{key: '1', className: 'bg-gray-300'},
//         {key: '2', className: 'bg-gray-300'},
//         {key: '3', className: 'bg-gray-300'},
//         {key: '+', className: 'bg-orange-300'}],
//         [{key: '0', className: 'bg-gray-300'},
//         {key: '.', className: 'bg-gray-300'},
//         {key: '=', className: 'bg-orange-300'}]
//     ]

//     const handleChange = (key)=>{
//       switch(key){
//         case '+', '-','*','/':
//             setOutput(output+ key)
//             break;
//         case 'AC':
//             setOutput('')
//             break;

//         case '+/-':
//             setOutput(eval(output*-1))
//             break;

//             case '=':
//             setOutput(eval(output))
//             break;

//             case '%':
//             setOutput(output/100)
//             break;

//             case '->':
//             setOutput(output.toString().slice(0,-1))
//             break;


            
//         default:
//             setOutput(output+ key)
            

//             break;
//       }

//     }
//   return (
//     <div className='bg-black p-2 text-white'>
//         <div className='text-white'>{output}</div>
//         {buttons.map((item,id)=>{
//             return <div className='m-4'>
//                 {item.map((val,idx)=>{
//                   return  <Button onClick={()=> handleChange(val.key)} className={val.className + ' rounded-full mx-1'}>{val.key}</Button>
//                 })}
//             </div>
//         })}
//     </div>
//   )
// }

// export default Calculator 


'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const Calculator = () => {
    const [output, setOutput] = useState('')
    const buttons = [
        [{key: 'AC', className:'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '+/-', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '%', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '/', className: 'mb-1 rounded  bg-gray-500  text-white decoration-1'}],
        [{key: '7', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '8', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '9', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '*', className: 'bg-orange-300'}],
        [{key: '4', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '5', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '6', className: 'mb-1 rounded  bg-gray-500  text-white decoration-1'},
        {key: '-', className: 'bg-orange-300'}],
        [{key: '1', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '2', className: 'mb-1 rounded  bg-gray-500  text-white decoration-1'},
        {key: '3', className: 'mb-1 rounded  bg-gray-500  text-white decoration-1'},
        {key: '+', className: 'bg-orange-300'}],
        [{key: '0', className: 'mb-1 rounded   bg-gray-500  text-white decoration-1'},
        {key: '.', className: 'mb-1 rounded  bg-gray-500  text-white decoration-1'},
        {key: '<-', className: 'bg-orange-300'},
        {key: '=', className: 'bg-orange-300 row-end-5'}
      ]
    ]
    const arthimeticKeys = ['/','*']

    const handleChange = (key)=>{
        if(arthimeticKeys.includes(output.toString().slice(-1)) && arthimeticKeys.includes(key)){
        const result =  output.slice(0,output.length-1)+ key
        setOutput(result)
        return;
        }else if(output.toString().slice(-1) == key && isNaN(Number(key)) ){
          return;
        }
      switch(key){
        case '+', '-','*','/':
            setOutput(output.toString()+ key)
            break;
        case 'AC':
            setOutput('')
            break;
        case '=':
          setOutput(eval(output))
          break;
        case '+/-':
            setOutput(eval(output*-1))
            break;
        case '%':
          setOutput(eval(output/100))
          break;
        case '<-':
          setOutput(output.toString().slice(0,-1))
          break;
        default:
            setOutput(output+ key)
            break;
      }

    }
  return (
    
    <div className='bg-black p-2 text-white'>
        <div className='text-white'>{output}</div>
        {buttons.map((item,id)=>{
            return <div className='m-4'>
                {item.map((val,idx)=>{
                  return  <Button onClick={()=> handleChange(val.key)} className={val.className + ' rounded-full mx-1'}>{val.key}</Button>
                })}
            </div>
        })}
    </div>
    
    
  )
}

export default Calculator


            