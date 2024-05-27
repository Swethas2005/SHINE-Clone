import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faMobileAlt, faMobileRetro, faPhone, faRing, faUser } from "@fortawesome/free-solid-svg-icons";
import "../components/Greybar.css";

function Greybar() {
  return (
    <div className="greybar-container">
      <div className="greybar-inner">
        <h1>Explore 300,000+ Jobs Now!</h1>
        {/* icons-bar */}
       <div id="icons-bar">
       <p className="greybar-para">
          <FontAwesomeIcon icon={faMobileAlt} /> Download App
        </p>
        <p className="greybar-para">
            <FontAwesomeIcon icon={faUser} /> For Employers
        </p>
        <p className="greybar-para">
            <FontAwesomeIcon icon={faPhone} /> Help
        </p>
       </div>
       {/* icons-bar-End */}
      </div>
    </div>
  );
}

export default Greybar;
