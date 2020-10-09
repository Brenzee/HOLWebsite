import React from 'react'
import './Gallery.css'

//All images for gallery
import Gift from '../../img/img_gallery/gift.jpg'
import Inside from '../../img/img_gallery/inside.jpg'
import Steak from '../../img/img_gallery/steak.jpg'
import Wine from '../../img/img_gallery/wine.jpg'
import Burger from '../../img/img_gallery/Burger.jpg'
import Card from './Card'

const Gallery = () => {
  const images = [Gift, Inside, Steak, Wine, Burger]

  const arrangeImg = images.map((img) => {
    return <Card src={img} key={img}></Card>
  })
  return <div className='image-list'>{arrangeImg}</div>
}

export default Gallery
