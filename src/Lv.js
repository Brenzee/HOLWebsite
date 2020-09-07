import React from "react";
import Header from "./Components/Header/Header";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import WhiteWave from "./Components/White Wave/WhiteWave";
import About from "./Components/About/About";
import Brunch from "./Components/Brunch/Brunch";
import Keiterings from "./Components/Keiterings/Keiterings";
import Reservation from "./Components/Reservation/Reservation";
import Gallery from "./Components/Gallery/Gallery";
import WhiteWaveBottom from "./Components/WhiteWaveBottom/WhiteWaveBottom";
import Footer from "./Components/Footer/Footer";
import contentLv from "./content/contentLv";

const Lv = () => {
  return (
    <div>
      <Header
        about={contentLv.about}
        brunch={contentLv.brunch}
        menu="Menu"
        banquet={contentLv.banquet}
        contacts={contentLv.contacts}
        welcome={contentLv.hero1}
        reserve={contentLv.res_button}
        flag1={contentLv.flag1}
        flag2={contentLv.flag2}
      />
      <SocialMedia />
      <WhiteWave />
      <About text={contentLv} />
      <Brunch text={contentLv} />
      <Keiterings text={contentLv} />
      <Reservation text={contentLv} />
      <Gallery />
      <WhiteWaveBottom />
      <Footer text={contentLv} />
    </div>
  );
};
export default Lv;
