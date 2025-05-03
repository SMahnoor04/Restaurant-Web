import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '10px',
  // background: '#efefef',
  // color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: './banner4.jpg',
    caption: ''
  },
  {
    url: './banner5.jpg',
    caption: ''
  },
  {
    url: './banner6.jpg',
    caption: ''
  },
];

const Slider = () => {
    
    return (
        <>
      <div className="slide-container">
        <Slide arrows={true}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </>
    )
}


export default Slider
