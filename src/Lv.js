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
      <Helmet htmlAttributes={{ lang: "lv" }}>
        <link rel="canonical" href="https://new.hol.lv"></link>
        <title>Restorāns Grilbārs House of Light | Restorāns Jūrmalā</title>
        <meta
          name="title"
          content="Restorāns Grilbārs House of Light | Restorāns Jūrmalā"
        />
        <meta
          name="description"
          content="Restorāns grilbārs House Of Light Jūrmalas sirdī Jomas ielā. Izcila svētdienas brunch vieta Jūrmalā. House of Light restorāns Jūrmalā."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://new.hol.lv/" />
        <meta
          property="og:title"
          content="Restorāns Grilbārs House of Light | Restorāns Jūrmalā"
        />
        <meta
          property="og:description"
          content="Restorāns grilbārs House Of Light Jūrmalas sirdī Jomas ielā. Izcila svētdienas brunch vieta Jūrmalā. House of Light restorāns Jūrmalā."
        />
        <meta
          property="og:image"
          content="https://scontent.frix6-1.fna.fbcdn.net/v/t1.0-9/110657866_3138264479601583_9222930105883202650_o.jpg?_nc_cat=103&_nc_sid=e3f864&_nc_ohc=80VmuddOsLAAX_qVFjC&_nc_ht=scontent.frix6-1.fna&oh=e996cc624ac8e08f87f00cad4fece21c&oe=5F8D08BB"
        />

        <meta
          name="keywords"
          content="restorāns jūrmalā, restorāns, restorāns jomas iela, brančš jūrmalā, svētdienas brunch, svētdienas brunch jūrmalā"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://new.hol.lv/" />
        <meta
          property="twitter:title"
          content="Restorāns Grilbārs House of Light | Restorāns Jūrmalā"
        />
        <meta
          property="twitter:description"
          content="Restorāns grilbārs House Of Light Jūrmalas sirdī Jomas ielā. Izcila svētdienas brunch vieta Jūrmalā. House of Light restorāns Jūrmalā."
        />
        <meta property="twitter:image" content="%PUBLIC_URL%/About1.jpg" />
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
      <Suspense fallback={" "}>
        <WhiteWaveBottom />
      </Suspense>
      <Suspense fallback={" "}>
        <Footer text={contentLv} />
      </Suspense>
    </div>
  );
};
export default Lv;
