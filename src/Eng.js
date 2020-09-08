import React from "react";

//All components
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
import contentEng from "./content/contentEng";
import Logo from "./img/logo.png";

import { Helmet } from "react-helmet";

const Eng = () => {
  return (
    <div>
      <Helmet>
        <html lang="en" amp />
        <title>Grill Bar House of Light - Restaurant in Jurmala</title>
        <meta property="og:locale" content="en_LV" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Restaurant House of Light" />
        <meta property="og:image" content={Logo} />
        <meta property="og:url" content="https://www.hol.lv/eng" />
        <meta
          property="og:description"
          content="House of Light - Grill Bar restaurant in Jurmala. Grill Bar on Jomas street, loved for sunday brunches and wonderful food"
        />

        <meta
          name="keywords"
          content="restaurant in jurmala, restaurant, restaurant jomas iela, restaurant jomas street, brunch jurmala, sunday brunch"
        />
        <meta
          name="description"
          content="House of Light - Grill Bar restaurant in Jurmala."
        />
      </Helmet>
      <Header
        about={contentEng.about}
        brunch={contentEng.brunch}
        menu="Menu"
        banquet={contentEng.banquet}
        contacts={contentEng.contacts}
        welcome={contentEng.hero1}
        reserve={contentEng.res_button}
        flag1={contentEng.flag1}
        flag2={contentEng.flag2}
      />
      <SocialMedia />
      <WhiteWave />
      <About text={contentEng} />
      <Brunch text={contentEng} />
      <Keiterings text={contentEng} />
      <Reservation text={contentEng} />
      <Gallery />
      <WhiteWaveBottom />
      <Footer text={contentEng} />
    </div>
  );
};
export default Eng;
