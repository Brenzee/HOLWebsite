import React from 'react'
import './Brunch.css'
import BrunchImg from '../../img/Brunch.jpg'
import ScrollIntoView from 'react-scroll-into-view'
import { motion } from 'framer-motion'

const Brunch = ({ text }) => {
  const { brunch_list, brunch_title, res_button } = text

  return (
    <div className='brunch' id='brunch'>
      <h2 className='about_title_brunch'>{brunch_title}</h2>
      <div className='brunch_container'>
        <div className='brunch_about item_text'>
          <p>{text.brunch_about}</p>
          <ul>
            {brunch_list.map((item) => (
              <li key={item}>
                <i className='fas fa-angle-right brunch_i'></i>
                <p>
                  <strong>{item}</strong>
                </p>
              </li>
            ))}
          </ul>
          <ScrollIntoView selector='#reserve'>
            <motion.button
              className='brunch_button'
              whileHover={{ scale: 1.04, originX: 0 }}
              whileTap={{ scale: 0.89 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {res_button}
            </motion.button>
          </ScrollIntoView>
        </div>
        <div className='brunch_list item_text'>
          <img
            className='brunch_img'
            src={BrunchImg}
            alt={brunch_title}
            width='100%'
          />
        </div>
      </div>
    </div>
  )
}

export default Brunch
