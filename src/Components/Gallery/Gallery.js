import React from 'react'
import './Gallery.css'

//All images for gallery
import Inside from '../../img/img_gallery/inside.jpg'
import Cakes from '../../img/img_gallery/Cakes.jpg'
import Salad from '../../img/img_gallery/Salad.jpg'
import Wine from '../../img/img_gallery/wine.jpg'
import Burger from '../../img/img_gallery/Burger.jpg'
import Card from './Card'

const Gallery = () => {
  const images = [Salad, Inside, Wine, Burger, Cakes]

  const arrangeImg = images.map((img) => {
    return <Card src={img} key={img}></Card>
  })
  return <div className='image-list'>{arrangeImg}</div>
}

export default Gallery
