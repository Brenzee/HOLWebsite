import React from "react";
import "./Header.css";
import { Component } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Components
import RussianFlag from "../../img/russian.png";
import EnglishFlag from "../../img/english.png";
import LatvianFlag from "../../img/latvian.png";
import Logo from "../../img/logo.png";

const variants = {
  onHover: { x: 200 },
  initial: { x: 0 },
};

class Header extends Component {
  constructor() {
    super();
    this.state = { isButtonActive: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isButtonActive: !this.state.isButtonActive,
    });
  }

  render() {
    return (
      <div className="hero_back">
        <div className="background">
          <div className="header">
            <div className="logo">
              <img src={Logo} alt="House of light restaurant" />
            </div>
            <motion.ul
              className={
                this.state.isButtonActive
                  ? "nav_list nav_list_active"
                  : "nav_list"
              }
            >
              <motion.li
                initital={{ y: 0 }}
                whileHover={{ y: -5 }}
                className="nav_item"
              >
                <a
                  href="https://www.facebook.com/pg/houseoflightgrilbars/menu/?ref=page_internal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.nav1}
                </a>
              </motion.li>
              <motion.li
                initital={{ y: 0 }}
                whileHover={{ y: -5 }}
                className="nav_item"
              >
                <ScrollIntoView selector="#about">
                  <button onClick={this.onClick}>{this.props.about}</button>
                </ScrollIntoView>
              </motion.li>
              <motion.li
                initital={{ y: 0 }}
                whileHover={{ y: -5 }}
                className="nav_item"
              >
                <ScrollIntoView selector="#brunch">
                  <button onClick={this.onClick}>{this.props.brunch}</button>
                </ScrollIntoView>
              </motion.li>
              <motion.li
                initital={{ y: 0 }}
                whileHover={{ y: -5 }}
                className="nav_item"
              >
                <ScrollIntoView selector="#keiterings">
                  <button onClick={this.onClick}>{this.props.banquet}</button>
                </ScrollIntoView>
              </motion.li>
              <motion.li
                initital={{ y: 0 }}
                whileHover={{ y: -5 }}
                className="nav_item"
              >
                <ScrollIntoView selector="#footer">
                  <button onClick={this.onClick}>{this.props.contacts}</button>
                </ScrollIntoView>
              </motion.li>
              <li className="nav_item flags">
                <Link
                  className="russian_flag flag"
                  to={this.props.flag1 === "Russian" ? "/ru" : "/"}
                >
                  <img
                    src={
                      this.props.flag1 === "Russian" ? RussianFlag : LatvianFlag
                    }
                    alt="house_of_light_russian"
                    height="18px"
                  />
                </Link>
                <Link
                  className="english_flag flag"
                  to={this.props.flag2 === "English" ? "/eng" : "/"}
                >
                  <img
                    src={
                      this.props.flag2 === "English" ? EnglishFlag : LatvianFlag
                    }
                    alt="house_of_light_english"
                    height="18px"
                  />
                </Link>
              </li>
            </motion.ul>
            <div
              className={this.state.isButtonActive ? "burger hide " : "burger"}
              onClick={this.onClick}
            >
              <i className="fas fa-bars"></i>
            </div>
            <div
              className={this.state.isButtonActive ? "exit active" : "exit"}
              onClick={this.onClick}
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
          <motion.div className="hero">
            <motion.h1
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 2.2,
                type: "spring",
                bounce: 0.4,
              }}
            >
              {this.props.welcome}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 2.2,
                type: "spring",
                bounce: 0.4,
              }}
            >
              House of Light
            </motion.h2>
            <motion.ScrollIntoView
              selector="#reserve"
              whileHover={{ scale: 1.04 }}
            >
              <motion.button
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 2.2,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                {this.props.reserve}
              </motion.button>
            </motion.ScrollIntoView>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Header;
