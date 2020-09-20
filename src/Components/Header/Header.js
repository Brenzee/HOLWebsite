import React from "react";
import "./Header.css";
import { Component } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

//Components
import RussianFlag from "../../img/russian.png";
import EnglishFlag from "../../img/english.png";
import LatvianFlag from "../../img/latvian.png";
import Logo from "../../img/logo.png";

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

  componentDidMount() {
    Aos.init({ duration: 1700 });
  }

  render() {
    return (
      <div className="hero_back">
        <div className="background">
          <div className="header">
            <div className="logo">
              <img src={Logo} alt="House of light restaurant" />
            </div>
            <ul
              className={
                this.state.isButtonActive
                  ? "nav_list nav_list_active"
                  : "nav_list"
              }
            >
              <li className="nav_item">
                <a
                  href="https://www.facebook.com/pg/houseoflightgrilbars/menu/?ref=page_internal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.nav1}
                </a>
              </li>
              <li className="nav_item">
                <ScrollIntoView selector="#about">
                  <button onClick={this.onClick}>{this.props.about}</button>
                </ScrollIntoView>
              </li>
              <li className="nav_item">
                <ScrollIntoView selector="#brunch">
                  <button onClick={this.onClick}>{this.props.brunch}</button>
                </ScrollIntoView>
              </li>
              <li className="nav_item">
                <ScrollIntoView selector="#keiterings">
                  <button onClick={this.onClick}>{this.props.banquet}</button>
                </ScrollIntoView>
              </li>
              <li className="nav_item">
                <ScrollIntoView selector="#footer">
                  <button onClick={this.onClick}>{this.props.contacts}</button>
                </ScrollIntoView>
              </li>
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
            </ul>
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
          <div className="hero">
            <h1 data-aos="fade-up" data-aos-once="true">
              {this.props.welcome}
            </h1>
            <h2 data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
              House of Light
            </h2>
            <ScrollIntoView selector="#reserve">
              <button
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="600"
              >
                {this.props.reserve}
              </button>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
