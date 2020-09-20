import React, { Suspense, lazy } from "react";

//All components
import Header from "./Components/Header/Header";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import WhiteWave from "./Components/White Wave/WhiteWave";

import WhiteWaveBottom from "./Components/WhiteWaveBottom/WhiteWaveBottom";
import Footer from "./Components/Footer/Footer";
import contentLv from "./content/contentLv";

import { Helmet } from "react-helmet";

const About = lazy(() => import("./Components/About/About"));
const Brunch = lazy(() => import("./Components/Brunch/Brunch"));
const Keiterings = lazy(() => import("./Components/Keiterings/Keiterings"));
const Reservation = lazy(() => import("./Components/Reservation/Reservation"));
const Gallery = lazy(() => import("./Components/Gallery/Gallery"));

const Lv = () => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "lv_LV" }}>
        {/* <!-- Primary Meta Tags --> */}
        <title>Grilbārs Restorāns House Of Light Jūrmalā</title>
        <meta
          name="title"
          content="Grilbārs Restorāns House Of Light Jūrmalā"
        />
        <meta
          name="description"
          content="Restorāns grilbārs Jūrmalas sirdī Jomas ielā. Grilbārs ir pazīstams ne tikai no izsmalcinātajiem ēdieniem, bet arī no bagātajiem svētdienas brančiem."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://houseoflightwebsite.netlify.app/"
        />
        <meta
          property="og:title"
          content="Grilbārs Restorāns House Of Light Jūrmalā"
        />
        <meta
          property="og:description"
          content="Restorāns grilbārs Jūrmalas sirdī Jomas ielā. Grilbārs ir pazīstams ne tikai no izsmalcinātajiem ēdieniem, bet arī no bagātajiem svētdienas brančiem."
        />
        <meta
          property="og:image"
          content="https://scontent.frix6-1.fna.fbcdn.net/v/t1.0-9/110657866_3138264479601583_9222930105883202650_o.jpg?_nc_cat=103&_nc_sid=e3f864&_nc_ohc=80VmuddOsLAAX_qVFjC&_nc_ht=scontent.frix6-1.fna&oh=e996cc624ac8e08f87f00cad4fece21c&oe=5F8D08BB"
        />

        {/* <!-- Twitter --> */}

        <meta
          name="keywords"
          content="restorāns jūrmalā, restorāns, restorāns jomas iela, brančš jūrmalā"
        />
        <meta
          name="google-site-verification"
          content="yznIW8INP9WSs47VWRNUP3PAxIUeCS_kWFJ3gn1qfp8"
        />
      </Helmet>

      <Header
        about={contentLv.about}
        brunch={contentLv.brunch}
        menu="Menu"
        banquet={contentLv.banquet}
        contacts={contentLv.contacts}
        welcome={contentLv.hero1}
        reserve={contentLv.res_button}
        nav1={contentLv.nav1}
        flag1={contentLv.flag1}
        flag2={contentLv.flag2}
      />

      <SocialMedia />
      <WhiteWave />
      <Suspense fallback={" "}>
        <About text={contentLv} />
      </Suspense>
      <Suspense fallback={" "}>
        <Brunch text={contentLv} />
      </Suspense>
      <Suspense fallback={" "}>
        <Keiterings text={contentLv} />
      </Suspense>
      <Suspense fallback={" "}>
        <Reservation text={contentLv} />
      </Suspense>
      <Suspense fallback={" "}>
        <Gallery />
      </Suspense>
      <WhiteWaveBottom />
      <Suspense fallback={" "}>
        <Footer text={contentLv} />
      </Suspense>
    </div>
  );
};
export default Lv;
