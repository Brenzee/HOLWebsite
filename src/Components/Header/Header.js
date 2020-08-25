import React from "react";
import "./Header.css";
import { Component } from "react";
import ScrollIntoView from "react-scroll-into-view";

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
              <img src={require("../../img/logo.png")} alt="" />
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
                  <button onClick={this.onClick}>Par mums</button>
                </ScrollIntoView>
              </li>
              <li className="nav_item">
                <ScrollIntoView selector="#brunch">
                  <button onClick={this.onClick}>Brančš</button>
                </ScrollIntoView>
              </li>
              <li className="nav_item">
                <ScrollIntoView selector="#keiterings">
                  <button onClick={this.onClick}>Keiterings</button>
                </ScrollIntoView>
              </li>
              <li className="nav_item">
                <ScrollIntoView selector="#footer">
                  <button onClick={this.onClick}>Kontakti</button>
                </ScrollIntoView>
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
            <h1>Sveicināti</h1>
            <h2>House of Light</h2>
            <ScrollIntoView selector="#reserve">
              <button>Rezervēt galdiņu</button>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
