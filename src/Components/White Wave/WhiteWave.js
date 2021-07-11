import React from 'react'
import './WhiteWave.css'
import { motion } from 'framer-motion'

const WhiteWave = () => {
  return (
    <motion.div
      className="white_wave"
      initial={{ scaleY: 1, y: 1 }}
      animate={{ scaleY: 1.15 }}
      transition={{
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.81,
      }}
    ></motion.div>
  )
}

export default WhiteWave
