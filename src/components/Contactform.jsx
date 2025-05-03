import React from 'react'

const Contactform = () => {
  return (
    <>
      <div className='mt-5'>
        <p className='bg-red-950 text-white text-3xl font-bold text-center'>Contact Us</p>
        <form className='w-[50%] mx-auto p-3'>
            <label>Name</label>
            <input type="text" className='w-[100%] border  p-2'/>
            <label>Email</label>
            <input type="text" className='w-[100%] border  p-2'/>
           <label>Message</label>
           <textarea className='w-[100%] border p-2'></textarea>
           <input type="Submit" className='border  p-2 px-3' />
        </form>
      </div>


    </>
  )
}

export default Contactform
