import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./thankYou.css";

export default function ThankYou() {
  return (
    <div className="thank-you-div">
      <div className="thanks-page-logo-div">
        <img src="./assets/images/feedinLogo.png" height={150} />
      </div>
      <div className="thanks-page-text1-div">
        <h2>Thanks For Donating Food ❤️</h2>
      </div>
      <div className="thanks-page-text2-div">
        <h5>10 Flames added to your wallet 🔥</h5>;
      </div>
    </div>
  );
}
