/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./profile.css";
import { useEffect } from "react";
import { useState } from "react";

export default function Profile() {
  const [userData, setUserData] = useState({});
  const role = localStorage.getItem("type");
  const getProfile = async () => {
    try {
      const res = await fetch("/profile", {
        method: "Get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });

      const data = await res.json();
      console.log("donationData**", userData);
      if (!data.status === 200) {
        throw new Error("donorDashboard has some error...");
      }
      return data.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getProfile();
      setUserData(data);
    })();
  }, []);
  return (
    <div className="main-profile-div">
      <div className="profile-name-div">
        <h5>Profile</h5>
      </div>
      <div className="profile-card">
        <div className="hey-div">
          <h5> Hey {userData.name}, </h5>
        </div>
        <div className="profile-pic-div-main">
          <img
            alt=""
            className="profile-pic-div"
            src="./assets/images/img_avatar.png"
          />
        </div>
        <div className="username-div">
          <h5>
            <b>{userData.name}</b>
          </h5>
        </div>
        <div className="phone-div">
          <h5>{userData.phone}</h5>
        </div>
        <div className="email-div">
          <h5 typeof="email">{userData.email} </h5>
        </div>
        <div className="profile-donation-flems-div">
          <div className="profile-donation-div">
            <h5>Donations</h5>
            <h5 className="donstions-number">{userData.totalOrder}</h5>
          </div>

          <div className="profile-flems-div">
            <h5>{role !== "ngo" ? "Flames" : "Role"}</h5>
            {role !== "ngo" && (
              <h5 className="flems-number">{userData.walletFlems} 🔥</h5>
            )}
            {role === "ngo" && <h5 className="flems-number">NGO</h5>}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<section className="vh-100" style="background-color: #eee;">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-md-9 col-lg-7 col-xl-5">
        <div
          className="card"
          style="border-radius: 15px; background-color: #93e2bb;"
        >
          <div className="card-body p-4 text-black">
            <div>
              <h6 className="mb-4">Exquisite hand henna tattoo</h6>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p className="small mb-0">
                  <i className="far fa-clock me-2"></i>3 hrs
                </p>
                <p className="fw-bold mb-0">$90</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="flex-shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                  className="img-fluid rounded-circle border border-dark border-3"
                  // style="width: 70px;"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <div className="d-flex flex-row align-items-center mb-2">
                  <p className="mb-0 me-2">@sheisme</p>
                  <ul
                    className="mb-0 list-unstyled d-flex flex-row"
                    //   style="color: #1B7B2C;"
                  >
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs"></i>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-rounded btn-sm"
                    data-mdb-ripple-color="dark"
                  >
                    + Follow
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-rounded btn-sm"
                    data-mdb-ripple-color="dark"
                  >
                    See profile
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-floating btn-sm"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fas fa-comment"></i>
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <p className="my-4 pb-1">52 comments</p>
            <button
              type="button"
              className="btn btn-success btn-rounded btn-block btn-lg"
            >
              <i className="far fa-clock me-2"></i>Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;

*/
