import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import WhiteWave from "./Components/White Wave/WhiteWave";
import About from "./Components/About/About";
import Keiterings from "./Components/Keiterings/Keiterings";
import Footer from "./Components/Footer/Footer";
import Reservation from "./Components/Reservation/Reservation";
import Brunch from "./Components/Brunch/Brunch";
import WhiteWaveBottom from "./Components/WhiteWaveBottom/WhiteWaveBottom";
import SocialMedia from "./Components/SocialMedia/SocialMedia";

const App = () => {
  return (
    <div>
      <Header
        about="Par mums"
        brunch="Brančš"
        menu="Menu"
        banquet="Banketi"
        contacts="Kontakti"
        welcome="Sveicināti"
        reserve="Rezervēt galdiņu"
      />
      <SocialMedia />
      <WhiteWave />
      <About lang="lv" />
      <Brunch lang="lv" />
      <Keiterings lang="lv" />
      <Reservation lang="lv" />
      <WhiteWaveBottom />
      <Footer lang="lv" />
    </div>
  );
};

export default App;
