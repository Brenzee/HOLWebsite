import React from "react";
import "./Keiterings.css";
import Bankets_img from "../../img/Keiterings.jpg";

const Keiterings = (props) => {
  if (props.lang === "lv") {
    return (
      <div className="bankets" id="keiterings">
        <div className="bankets_grid">
          <div className="image">
            <img src={Bankets_img} alt="izbraukuma bankets" />
          </div>
          <div className="about_bankets">
            <div className="bankets_title">Banketu piedāvājums</div>
            <div className="bankets_subtitle">
              <div>Jūs svinat – mēs gatavojam!</div>
            </div>
            <div className="bankets_items">
              <div className="bankets_item">
                <i className="fas fa-utensils"></i>
                <div className="bankets_text">
                  Pie mums var pasūtīt visu – sākot no gardām uzkodu platēm,
                  svaigiem salātiem un visdažādākajiem karstajiem ēdieniem, līdz
                  pat mājas limonādēm un citiem dzērieniem.
                </div>
              </div>
              <div className="bankets_item">
                <i className="fas fa-truck"></i>
                <div className="bankets_text">
                  Nodrošinām transportu ēdiena piegādei
                </div>
              </div>
              <div className="bankets_item">
                <i className="fas fa-user-tie"></i>
                <div className="bankets_text">
                  Piedāvājam apkalpojošo personālu Jūsu pasākumam.
                </div>
              </div>
              <div className="bankets_item">
                <i className="fas fa-address-card"></i>
                <div className="bankets_text">
                  Vairāk informācijai rakstīt{" "}
                  <a className="blue" href="mailto:raitis@hol.lv">
                    raitis@hol.lv
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.lang === "en") {
    return <div className="en"></div>;
  } else if (props.lang === "ru") {
    return <div className="ru"></div>;
  }
};

export default Keiterings;
