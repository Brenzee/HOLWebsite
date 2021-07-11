import React from 'react'
import './Gallery.css'
import Masonry from 'react-masonry-css'

//All images for gallery
import Inside from '../../img/img_gallery/inside.jpg'
import Cakes from '../../img/img_gallery/Cakes.jpg'
import Salad from '../../img/img_gallery/Salad.jpg'
import Wine from '../../img/img_gallery/wine.jpg'
import Burger from '../../img/img_gallery/Burger.jpg'
import Card from './Card'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const Gallery = () => {
  const images = [Salad, Inside, Wine, Burger, Cakes]

  const arrangeImg = images.map((img) => {
    return <img src={img} key={img} />
  })

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {arrangeImg}
    </Masonry>
  )
}

export default Gallery
