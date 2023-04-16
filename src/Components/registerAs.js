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
          <a href="/registerdonor">
            <button type="submit" className="btn">
              Donor
            </button>
          </a>
        </div>
        <div className="volunteer-btn">
          <a href="/registervolunteer">
            <button type="submit" className="btn">
              volunteer
            </button>
          </a>
        </div>
        <div className="ngo-btn">
          <a href="/registerngo">
            <button type="submit" className="btn">
              NGO
            </button>
          </a>
        </div>
      </div>
      <br />
      <div className="login-page-link">
        <a href="/login">Already register? Login here</a>
      </div>
    </div>
  );
}
