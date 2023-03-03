import React from "react";
import registerAs from "./registerAs.css";

export default function RegisterAs() {
  return (
    <div className="main-registeras">
      <div className="logo-div">
        <img src="./assets/images/feedinLogo.png" height={150} />
      </div>
      <div className="text-div">Register As</div>

      <div className="btn-group">
        <div className="donor-btn">
          <button type="submit" class="btn">
            Donor
          </button>
        </div>
        <div className="volunteer-btn">
          <button type="submit" class="btn">
            volunteer
          </button>
        </div>
        <div className="ngo-btn">
          <button type="submit" class="btn">
            NGO
          </button>
        </div>
      </div>
    </div>
  );
}
