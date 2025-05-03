import React from 'react'
import { motion } from 'framer-motion'

const Card = () => {
  return (
    <>
      < div className='cards aboutsec grid grid-cols-2 px-10 py-10 text-2xl gap-20'>
        <div className="card-text">
          <h2 className='font-bold text-4xl text-orange-700'>Special Offer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus, dicta fuga placeat sequi nulla, accusantium quisquam
            labore doloribus veritatis quaerat modi, molestiae alias quia voluptates
            deleniti harum iste tempore? Beatae necessitatibus accusantium dolorum,
            ipsa in voluptatem earum sapiente debitis labore temporibus tempore ipsam
            cumque, repellat magni doloremque maxime recusandae. Vel non minima magni
            similique sapiente excepturi fugiat vitae necessitatibus alias rem nesciunt
            libero qui dignissimos porro voluptatem praesentium ab velit odit ipsum provident,
            labore dolorum vero voluptas? Eaque architecto delectus magni.
          </p>
        </div>
        <motion.div
          whileInView={{
            // rotate:[0,20,0]
          }}

          whileHover={{
            scale: 1.05
          }} card-img>
          <img src="./sec2.jpg" alt="" />

        </motion.div>
      </div>
    </>
  )
}

export default Card
