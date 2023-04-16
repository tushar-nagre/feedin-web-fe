import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toastError, toastSuccess } from "../Helper/toast";

export default function NGORegistration() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    address: "",
    organization_name: "",
    termsandcondition: false,
    certificatePath: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    if (name === "termsandcondition")
      setUser({ ...user, [name]: e.target.checked });
    else setUser({ ...user, [name]: value });
  };

  const handleUploadFile = async (e) => {
    console.log(e);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    let fileResponse = await fetch("/upload/re", {
      method: "post",
      body: data,
    });
    fileResponse = await fileResponse.json();
    fileResponse = fileResponse.data;
    console.log("fileResponse", fileResponse);
    setUser({
      ...user,
      certificatePath: fileResponse.filename,
    });
    console.log("doantion", user);
  };

  const postData = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      password,
      cpassword,
      address,
      organization_name,
      termsandcondition,
      certificatePath,
    } = user;

    if (!termsandcondition) {
      toastError("Please agree terms and condition");
      return false;
    }
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
    if (!certificatePath) {
      toastError("Please upload certificate");
      return false;
    }

    const type = "donor";
    const res = await fetch("/register/ngo", {
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
        address,
        organization_name,
        type,
        certificatePath,
      }),
    });

    const data = await res.json();

    if (data.status === false) {
      toastError(`Invalid registration. ${data.message}`);
      console.log(`Invalid registration ${data.error}`);
    } else {
      toastSuccess("Successful registration");
      console.log("Successful registration");

      history.push("/login");
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
                placeholder="NGO name"
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

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Your address"
                value={user.address}
                onChange={handleInputs}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Organization name</label>
              <input
                type="text"
                className="form-control"
                name="organization_name"
                placeholder="NGO name"
                value={user.organization_name}
                onChange={handleInputs}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Organization certificate</label>
              <input
                type="file"
                className="form-control"
                id="myFile"
                placeholder="NGO certificate"
                onChange={handleUploadFile}
              />
            </div>
            <div className="tacbox">
              <input
                onChange={handleInputs}
                className="tacboxInput"
                name="termsandcondition"
                id="checkbox"
                type="checkbox"
              />
              <label for="checkbox">
                {" "}
                I agree to these{" "}
                <a
                  className="tacboxA"
                  href="/termsandcondition"
                  target="_blank"
                >
                  Terms and Conditions
                </a>
                .
              </label>
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
