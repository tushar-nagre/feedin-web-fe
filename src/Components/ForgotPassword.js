import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./forgotPassword.css";

export default function ForgotPassword() {
  return (
    <div className="forgot-password-div">
      <div className="forgot-password-logo-div">
        <img src="./assets/images/feedinLogo.png" height={150} />
      </div>
      <div className="forgot-password-text-div">
        <h5>Forgot Password</h5>
      </div>
      <form className="forgot-password-form">
        <div className="forgot-password-input-div">
          <input
            type="email"
            placeholder="Enter your email"
            className="forgot-pass-email-input-box"
          />
        </div>
      </form>
      <div className="register-btn">
        <button type="submit" className="btn">
          PROCEED
        </button>
      </div>
      <div className="break">
        <br />
      </div>
      <div className="login-page-link">
        <a href="/login">Already register? Login here</a>
      </div>
    </div>
  );
}
