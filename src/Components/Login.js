import React from "react";
import login from "./login.css";

export default function Login() {
  return (
    <div className="main-login-div">
      <div className="logo-div">
        <img src="./assets/images/feedinLogo.png" height={150} />
      </div>
      <div className="formDiv">
        <form id="form">
          <dir className="input-fields">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input type="email" class="form-control " />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input type="password" class="form-control " />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Agree Terms & Conditions
              </label>
            </div>
          </dir>
          <div className="btn-group">
            <div className="login-btn">
              <button type="submit" class="btn">
                Submit
              </button>
            </div>
            <br />
            <br />
            <div className="google-btn">
              <button type="submit" class="btn">
                <img
                  className="img-btn"
                  src="./assets/images/google.png"
                  height={35}
                />
                &nbsp;Continue with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
