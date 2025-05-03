import React from 'react'
import {motion} from 'framer-motion'
const AboutSec = () => {
  return (
    <>
    <div className='aboutsec grid grid-cols-2 px-10 py-10 text-2xl gap-20'>
       <motion.div 
    whileInView={{
        // rotate:[0,20,0]
    }}

    whileHover={{
       scale: 1.05
    }} about-img>
        <img src="./sec.jpg" alt="" />

        </motion.div>
        <div className='about-text'>
        <h2 className='font-bold text-3xl text-red-950'>New Offer</h2>
        <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Doloribus ut error quidem cumque, ipsam dolore.
           Repudiandae dolores at earum enim.</p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dicta, accusantium iusto? Repellat ea facere dolorum dolore laboriosam,
            similique repellendus quibusdam.</p>
            <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Doloribus ut error quidem cumque, ipsam dolore.
           Repudiandae dolores at earum enim.</p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dicta, accusantium iusto? Repellat ea facere dolorum dolore laboriosam,
            similique repellendus quibusdam.</p>
           
       </div>
</div>
    </>
  )
}

export default AboutSec
