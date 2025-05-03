import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [data,setData] = useState(100);
     useEffect (()=>{
        console.log("We are learning Hook in react");
     },[])
  return (
    <>
      UseEffect Hook
      <p>The count value is; {count}</p>
      <button onClick={()=> setCount(count+1)} 
      className='  bg-purple-300 text to-black  px-10 py-2'>Increment</button>
      <br/>
      <p>The count value is; {data}</p>
         <button onClick={()=> setData(data-1)} 
      className='  bg-purple-300 text to-black  px-10 py-2'>Decrement</button>

    </>
  )
}

export default UseEffect