import React from 'react'
import './WhiteWave.css'
import { motion } from 'framer-motion'

const WhiteWave = () => {
  return (
    <motion.div
      initial={{ scaleY: 1, y: 1 }}
      animate={{ scaleY: 1.15 }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1,
      }}
      className='white_wave'
    ></motion.div>
  )
}

export default WhiteWave
