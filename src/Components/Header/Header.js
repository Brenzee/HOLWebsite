import React from "react";
import "./Header.css";
import { Component } from "react";

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
                <a href="/#" onClick={this.onClick}>
                  Par mums
                </a>
              </li>
              <li className="nav_item">
                <a href="/#" onClick={this.onClick}>
                  Ēdienkarte
                </a>
              </li>
              <li className="nav_item">
                <a href="/#" onClick={this.onClick}>
                  Brančs
                </a>
              </li>
              <li className="nav_item">
                <a href="/#" onClick={this.onClick}>
                  Keiterings
                </a>
              </li>
              <li className="nav_item">
                <a href="/#" onClick={this.onClick}>
                  Kontakti
                </a>
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
            <a href="/reserve">Rezervēt Galdiņu</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
