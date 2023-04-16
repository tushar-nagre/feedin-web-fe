import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./donorRegistration.css";
import { toastError, toastSuccess } from "../Helper/toast";

export default function VolunteerRegistration() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    address: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    // name validation
    const isValidName = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(name);
    if (!isValidName || !name === "") {
      toastError("Please enter valid name.");
      return "Please enter valid name.";
    }

    // email validation
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail || !email === "") {
      toastError("Please enter valid eamil address.");
      return "Please enter valid eamil address.";
    }

    // phone validation
    const isValidMobileNumber = /^(\+91|0)?[6789]\d{9}$/.test(phone);
    if (!isValidMobileNumber || !phone === "") {
      toastError("please enter valid phone no.");
      return "please enter valid phone no.";
    }

    // password validation
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    if (!passwordRegex || !password === "") {
      toastError(
        "Password at least one uppercase letter, one lowercase letter, one digit, and one special symbol."
      );
      return "Password at least one uppercase letter, one lowercase letter, one digit, and one special symbol.";
    }

    const res = await fetch("/register/volunteer", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === false) {
      toastError(`Invalid registration. ${data.message}`);
    } else {
      history.push("/login");
      toastSuccess("Successful registration");
      history.go();
    }
  };

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
                value={user.name}
                onChange={handleInputs}
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
                value={user.email}
                onChange={handleInputs}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="number"
                className="form-control "
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Your phone number"
                value={user.phone}
                onChange={handleInputs}
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
                value={user.password}
                onChange={handleInputs}
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
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="register-btn">
            <button type="submit" className="btn" onClick={postData}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
