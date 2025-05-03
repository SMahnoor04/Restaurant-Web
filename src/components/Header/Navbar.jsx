import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TbLayoutNavbar } from "react-icons/tb";


const Navbar = () => {
  const [open,setOpen] = useState(false);

  const handletoggle = () => {
    setOpen(!open);
    console.log(open);
  }
  return (
    <>
      <div className='navbar  flex text-centre text-white bg-red-950 justify-between items-center p-2'>
        <div className='navbar-logo p-5'>
            Burgers's Lab
        </div>
         <div className='navbar-items invisible md:visible'>
            <ul className='items-center justify-between flex gap-25'>
                <li><Link to= '/'>Home</Link></li>
                <li><Link to= '/Services'>Service</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/About'>About</Link></li>

            </ul>
         </div>
         <div className='navbar-toggle p-5 md:invisible visible' onClick={handletoggle}><TbLayoutNavbar />
         </div>
      </div>

      <div className={`${open ? 'visible' : 'hidden'} text-center mobile-navbar bg-red-950 text-white text-centre leading-8`}>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
      
      </div>

    </>
  )
}

export default Navbar
