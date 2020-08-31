import React from "react";
import "./Keiterings.css";

const Keiterings = () => {
  return (
    <div className="keiterings" id="keiterings">
      <div className="keiterings_grid">
        <div className="party"></div>
        <div className="keitering_text">
          <div className="keiterings_title">Banketu piedāvājums</div>
          <div className="keit">
            <div className="keit_title">Jūs svinat – mēs gatavojam!</div>
          </div>
          <div className="keit_items">
            <div className="keit_item">
              <i className="fas fa-utensils"></i>
              <div className="item_text">
                Pie mums var pasūtīt visu – sākot no gardām uzkodu platēm,
                svaigiem salātiem un visdažādākajiem karstajiem ēdieniem, līdz
                pat mājas limonādēm un citiem dzērieniem.
              </div>
            </div>
            <div className="keit_item">
              <i className="fas fa-truck"></i>
              <div className="item_text">
                Nodrošinām transportu ēdiena piegādei
              </div>
            </div>
            <div className="keit_item">
              <i className="fas fa-user-tie"></i>
              <div className="item_text">
                Piedāvājam apkalpojošo personālu Jūsu pasākumam.
              </div>
            </div>
            <div className="keit_item">
              <i className="fas fa-address-card"></i>
              <div className="item_text">
                Vairāk informācijai rakstīt{" "}
                <span className="blue">raitis@hol.lv</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keiterings;
