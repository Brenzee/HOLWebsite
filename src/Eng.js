import React, { Suspense } from "react";

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

import { Helmet } from "react-helmet";

const Eng = () => {
  return (
    <div>
      <Helmet>
        <html amp lang="en" />
        <link
          rel="canonical"
          href="https://houseoflightwebsite.netlify.app/eng"
        ></link>
        {/* <!-- Primary Meta Tags --> */}
        <title>Grillbar Restaurant House of Light Jurmala</title>
        <meta
          name="title"
          content="Grillbar Restaurant House of Light Jurmala"
        />
        <meta
          name="description"
          content="Restaurant grill bar in the heart of Jurmala, Jomas street. Grill bar is widely known not only from amazing food, but from rich brunches as well."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://houseoflightwebsite.netlify.app/"
        />
        <meta
          property="og:title"
          content="Grillbar Restaurant House of Light Jurmala"
        />
        <meta
          property="og:description"
          content="Restaurant grill bar in the heart of Jurmala, Jomas street. Grill bar is widely known not only from amazing food, but from rich brunches as well."
        />
        <meta
          property="og:image"
          content="https://scontent.frix6-1.fna.fbcdn.net/v/t1.0-9/110657866_3138264479601583_9222930105883202650_o.jpg?_nc_cat=103&_nc_sid=e3f864&_nc_ohc=80VmuddOsLAAX_qVFjC&_nc_ht=scontent.frix6-1.fna&oh=e996cc624ac8e08f87f00cad4fece21c&oe=5F8D08BB"
        />

        {/* <!-- Twitter --> */}

        <meta
          name="keywords"
          content="restaurant jurmala, restauran, restaurant jomas street, brunch jurmala"
        />
      </Helmet>
      <Header
        about={contentEng.about}
        brunch={contentEng.brunch}
        menu="Menu"
        banquet={contentEng.banquet}
        contacts={contentEng.contacts}
        welcome={contentEng.hero1}
        nav1={contentEng.nav1}
        reserve={contentEng.res_button}
        flag1={contentEng.flag1}
        flag2={contentEng.flag2}
      />

      <SocialMedia />
      <WhiteWave />
      <Suspense fallback={" "}>
        <About text={contentEng} />
      </Suspense>
      <Suspense fallback={" "}>
        <Brunch text={contentEng} />
      </Suspense>
      <Suspense fallback={" "}>
        <Keiterings text={contentEng} />
      </Suspense>
      <Suspense fallback={" "}>
        <Reservation text={contentEng} />
      </Suspense>
      <Suspense fallback={" "}>
        <Gallery />
      </Suspense>
      <WhiteWaveBottom />
      <Suspense fallback={" "}>
        <Footer text={contentEng} />
      </Suspense>
    </div>
  );
};
export default Eng;
