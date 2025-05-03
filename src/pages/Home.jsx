import React from 'react'
import Slider from '../components/Slider'
import ServicesCards from '../components/ServicesCards'
import AboutSec from '../components/AboutSec'
import Card from '../components/card'
// import Marqueetag from '../components/Marqueetag'


const Home = () => {
  return (
    <div>
      {/* <Marqueetag /> */}
        <Slider />
        <ServicesCards/>
        <AboutSec/>
        <Card />
        
    </div>
  )
}

export default Home
