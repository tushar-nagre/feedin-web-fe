import React from "react";
import "./forgotPassword.css";
import { useState } from "react";
import { toastError, toastSuccess } from "../Helper/toast";
import { useHistory } from "react-router-dom";

export default function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const handleInputs = async (e) => {
    const value = e.target.value;

    setEmail(value);
  };
  const sendEmail = async () => {
    try {
      console.log("ddd", email);
      const isValidEmail = /\S+@\S+\.\S+/.test(email);
      if (!isValidEmail || !email === "") {
        toastError("Please enter valid eamil address.");
        return "Please enter valid eamil address.";
      }

      const res = await fetch("/forgotpassword", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (!data.status) {
        toastError(data.message);
        return;
      }
      toastSuccess("Email sent successfully");
      history.push("/login");
      history.go();
    } catch (e) {
      console.log("e", e);
    }
  };
  return (
    <div className="forgot-password-div">
      <div className="forgot-password-logo-div">
        <img alt="" src="./assets/images/feedinLogo.png" height={150} />
      </div>
      <div className="forgot-password-text-div">
        <h5>Forgot Password</h5>
      </div>
      <form className="forgot-password-form">
        <div className="forgot-password-input-div">
          <input
            type="email"
            value={email}
            onChange={handleInputs}
            name="email"
            placeholder="Enter your email"
            handleInputs
            className="forgot-pass-email-input-box"
          />
        </div>
      </form>
      <div className="register-btn">
        <button onClick={() => sendEmail()} type="submit" className="btn">
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
