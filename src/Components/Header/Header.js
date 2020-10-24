import React from 'react'
import './Header.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion'

//Components
import RussianFlag from '../../img/russian.png'
import EnglishFlag from '../../img/english.png'
import LatvianFlag from '../../img/latvian.png'
import Logo from '../../img/logo.png'

class Header extends Component {
  constructor() {
    super()
    this.state = { isButtonActive: false, isVisible: false }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      isButtonActive: !this.state.isButtonActive,
    })
  }

  componentDidMount() {
    this.setState({
      isVisible: true,
    })
  }

  render() {
    return (
      <div className='hero_back'>
        <div className='background'>
          <header className='header'>
            <div className='logo'>
              <img src={Logo} alt='House of light restaurant' />
            </div>
            <motion.ul
              className={
                this.state.isButtonActive
                  ? 'nav_list nav_list_active'
                  : 'nav_list'
              }
            >
              <motion.li whileHover={{ scale: 1.04 }} className='nav_item'>
                <a
                  href='https://www.facebook.com/pg/houseoflightgrilbars/menu/?ref=page_internal'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {this.props.nav1}
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.04 }} className='nav_item'>
                <LinkScroll
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={750}
                >
                  <button onClick={this.onClick}>{this.props.about}</button>
                </LinkScroll>
              </motion.li>
              <motion.li whileHover={{ scale: 1.04 }} className='nav_item'>
                <LinkScroll
                  to='brunch'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  <button onClick={this.onClick}>{this.props.brunch}</button>
                </LinkScroll>
              </motion.li>
              <motion.li whileHover={{ scale: 1.04 }} className='nav_item'>
                <LinkScroll
                  to='keiterings'
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={900}
                >
                  <button onClick={this.onClick}>{this.props.banquet}</button>
                </LinkScroll>
              </motion.li>
              <motion.li whileHover={{ scale: 1.04 }} className='nav_item'>
                <LinkScroll
                  to='footer'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={900}
                >
                  <button onClick={this.onClick}>{this.props.contacts}</button>
                </LinkScroll>
              </motion.li>
              <li className='nav_item flags'>
                <Link
                  className='russian_flag flag'
                  to={this.props.flag1 === 'Russian' ? '/ru' : '/'}
                >
                  <img
                    src={
                      this.props.flag1 === 'Russian' ? RussianFlag : LatvianFlag
                    }
                    alt='house_of_light_russian'
                    height='18px'
                  />
                </Link>
                <Link
                  className='english_flag flag'
                  to={this.props.flag2 === 'English' ? '/en' : '/'}
                >
                  <img
                    src={
                      this.props.flag2 === 'English' ? EnglishFlag : LatvianFlag
                    }
                    alt='house_of_light_english'
                    height='18px'
                  />
                </Link>
              </li>
            </motion.ul>
            <div
              className={this.state.isButtonActive ? 'burger hide ' : 'burger'}
              onClick={this.onClick}
            >
              <i className='fas fa-bars'></i>
            </div>
            <div
              className={this.state.isButtonActive ? 'exit active' : 'exit'}
              onClick={this.onClick}
            >
              <i className='fas fa-times'></i>
            </div>
          </header>
          <AnimatePresence initial={false}>
            {this.state.isVisible && (
              <motion.div className='hero'>
                <motion.h3
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 2.2,
                    type: 'spring',
                    bounce: 0.4,
                  }}
                >
                  {this.props.welcome}
                </motion.h3>
                <motion.h2
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 2.2,
                    type: 'spring',
                    bounce: 0.4,
                  }}
                >
                  House of Light
                </motion.h2>
                <LinkScroll
                  to='reserve'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.7,
                      duration: 2.2,
                      type: 'spring',
                      bounce: 0.4,
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.89 }}
                    >
                      {this.props.reserve}
                    </motion.button>
                  </motion.div>
                </LinkScroll>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    )
  }
}

export default Header
