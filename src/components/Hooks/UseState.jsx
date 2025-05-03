import React, { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      My State Value Is Count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}
        className=' bg-purple-300 text to-black  px-10 py-2'>Increment
      </button>
      <br />
      <button onClick={() => setCount(count - 1)}
        className=' bg-purple-300 text to-black  px-10 py-2 mt-5'>Decrement
      </button>


    </>
  )
}

export default UseState