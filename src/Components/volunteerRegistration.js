import React from "react";
import donorRegistration from "./donorRegistration.css";

export default function VolunteerRegistration() {
  return (
    <div className="main-donor-registration-div">
      <div className="donor-restration-page-logo-div">
        <img
          className="donor-regi-img"
          src="./assets/images/feedinLogo.png"
          height={150}
        />
      </div>
      <div className="formDiv ">
        <form id="form">
          <div className="donor-input-fields">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control " />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="donor-form-label">
                Email address
              </label>
              <input type="email" class="form-control " />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Mobile Number</label>
              <input
                type="tel"
                class="form-control "
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input type="password" class="form-control " />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Confirm Password
              </label>
              <input type="password" class="form-control " />
            </div>
          </div>
          <br />
          <br />
          <div className="register-btn">
            <button type="submit" class="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
