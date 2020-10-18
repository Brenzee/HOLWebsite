import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Reviews = () => {
  return (
    <div style={{ marginLeft: '7rem', marginRight: '7rem', marginTop: '0rem' }}>
      {/* <CarouselProvider
        style={{ position: 'relative' }}
        naturalSlideHeight={100}
        naturalSlideWidth={800}
        totalSlides={3}
        infinite={true}
      >
        <Slider>
          <Slide index={0} style={{ background: 'red' }}>
            First
          </Slide>
          <Slide index={1}>Scnd</Slide>
          <Slide index={2}>Third</Slide>
        </Slider>
        <ButtonBack
          style={{
            color: '#3abadf',
            position: 'absolute',
            top: '35%',
            fontSize: '35px',
            left: '10px',
            background: 'none',
            border: 'none',
          }}
        >
          <i className='fas fa-angle-left'></i>
        </ButtonBack>
        <ButtonNext
          style={{
            color: '#3abadf',
            position: 'absolute',
            fontSize: '35px',
            top: '35%',
            right: '10px',
            background: 'none',
            border: 'none',
          }}
        >
          <i className='fas fa-angle-right'></i>
        </ButtonNext>
      </CarouselProvider> */}
    </div>
  )
}

export default Reviews
