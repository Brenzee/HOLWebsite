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
      <Helmet htmlAttributes={{ lang: "en_LV" }}>
        <link rel="canonical" href="https://new.hol.lv/eng"></link>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          Restaurant Grillbar House of Light | Restaurant in Jurmala
        </title>
        <meta
          name="title"
          content="Restaurant Grillbar House of Light | Restaurant in Jurmala"
        />
        <meta
          name="description"
          content="Restaurant grill bar House of Light Jurmala, Jomas street. Great place for sunday brunch in Jurmala. House of Light restaurant Jurmala."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://new.hol.lv/eng" />
        <meta
          property="og:title"
          content="Restaurant Grillbar House of Light | Restaurant in Jurmala"
        />
        <meta
          property="og:description"
          content="Restaurant grill bar House of Light Jurmala, Jomas street. Great place for sunday brunch in Jurmala. House of Light restaurant Jurmala."
        />
        <meta
          property="og:image"
          content="https://scontent.frix6-1.fna.fbcdn.net/v/t1.0-9/110657866_3138264479601583_9222930105883202650_o.jpg?_nc_cat=103&_nc_sid=e3f864&_nc_ohc=80VmuddOsLAAX_qVFjC&_nc_ht=scontent.frix6-1.fna&oh=e996cc624ac8e08f87f00cad4fece21c&oe=5F8D08BB"
        />

        {/* <!-- Twitter --> */}

        <meta
          name="keywords"
          content="restaurant jurmala, restaurant, restaurant jomas street, brunch jurmala, sunday brunch jurmala, best restaurant in jurmala, best restaurant on jomas street"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://new.hol.lv/eng" />
        <meta
          property="twitter:title"
          content="Restaurant Grillbar House of Light | Restaurant in Jurmala"
        />
        <meta
          property="twitter:description"
          content="Restaurant grill bar House of Light Jurmala, Jomas street. Great place for sunday brunch in Jurmala. House of Light restaurant Jurmala."
        />
        <meta property="twitter:image" content="%PUBLIC_URL%/About1.jpg" />
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
      <Suspense fallback={" "}>
        <WhiteWaveBottom />
      </Suspense>
      <Suspense fallback={" "}>
        <Footer text={contentEng} />
      </Suspense>
    </div>
  );
};
export default Eng;
