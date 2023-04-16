import React, { useState } from "react";
import login from "./login.css";
import { useHistory } from "react-router-dom";
import { toastError, toastSuccess } from "../Helper/toast";

export default function Login() {
  const history = useHistory();
  // cookie.remove("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await res.json();
    console.log("data", data.data);
    const userData = data.data;
    localStorage.setItem("type", userData.usertype);
    localStorage.setItem("name", userData.name);
    if (res.status === 401) {
      toastError("Invalid Credentials.");
    } else {
      toastSuccess("Login successfull.");
      if (userData.usertype === "donor") {
        history.push("/donor-dashboard");
      } else if (userData.usertype === "volunteer") {
        history.push("/volunteer-dashboard");
      } else if (userData.usertype === "ngo") {
        history.push("/volunteer-dashboard");
      }
      history.go();
    }
  };

  return (
    <div className="main-login-div">
      <div className="logo-div">
        <img src="./assets/images/feedinLogo.png" alt="image1" height={150} />
      </div>
      <div className="formDiv">
        <form method="POST" id="form-div">
          <dir className="input-fields">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control "
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control "
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </dir>
          <div className="btn-group">
            <div className="login-btn">
              <button type="submit" className="btn" onClick={userLogin}>
                Submit
              </button>
            </div>
            <br />
            <br />
            {/* <div className="google-btn">
              <button type="submit" className="btn">
                <img
                  className="img-btn"
                  src="./assets/images/google.png"
                  alt="image2"
                  height={35}
                />
                &nbsp;Continue with Google
              </button>
            </div> */}
            <div className="forgot-pass-div">
              <a href="/forgotpass">Forgot Password</a>
            </div>

            <div className="forgot-pass-div">
              <a href="/register">Register</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
