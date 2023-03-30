import React from "react";

export default function NGORegistration() {
  return (
    <div className="main-donor-registration-div">
      <div className="donor-restration-page-logo-div">
        <img
          className="donor-regi-img"
          src="./assets/images/feedinLogo.png"
          alt="image5"
          height={150}
        />
      </div>
      <div className="formDiv">
        <form id="0" className="donor-registration-form-div">
          <div className="donor-input-fields">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="donor-form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your email"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control "
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Your phone number"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="cpassword"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Your address"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Organization name</label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Your address"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Organization certificate</label>
              <input
                type="file"
                className="form-control"
                name="address"
                placeholder="Your address"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="register-btn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
