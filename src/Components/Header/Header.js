import React from "react";
import "./Header.css";
import { Component } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";

//Components
import RussianFlag from "../../img/russian.png";
import EnglishFlag from "../../img/english.png";
import Logo from "../../img/logo.png";
import WhiteWave from "../../img/WhiteWave.png";

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
                  Menu
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
                <Link className="russian_flag" to="/ru">
                  <img
                    src={RussianFlag}
                    alt="house_of_light_russian"
                    height="18px"
                  />
                </Link>
                <Link className="english_flag" to="/eng">
                  <img
                    src={EnglishFlag}
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
            <h1>{this.props.welcome}</h1>
            <h2>House of Light</h2>
            <ScrollIntoView selector="#reserve">
              <button>{this.props.reserve}</button>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
