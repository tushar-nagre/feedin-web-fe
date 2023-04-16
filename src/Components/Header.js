import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const USER_TYPES = {
  DONOR: "donor",
  VOLUNTEER: "volunteer",
  NGO: "ngo",
};

// const CURRENT_USER_TYPE = USER_TYPES.DONOR;

const HeaderSet = (CURRENT_USER_TYPE) => {
  let navData;

  if (CURRENT_USER_TYPE === USER_TYPES.DONOR) {
    navData = {
      firstMenu: "Dashboard",
      secondMenu: "Doation Requests",
      thirdMenu: "Wallet",
      forthMenu: "Logout",
      firstLink: "/donor-dashboard",
      secondLink: "/donor-accept-request",
      thirdLink: "/wallet",
      forthLink: "",
    };
  } else if (CURRENT_USER_TYPE === USER_TYPES.VOLUNTEER) {
    navData = {
      firstMenu: "Dashboard",
      secondMenu: "History",
      thirdMenu: "Wallet",
      forthMenu: "Logout",
      firstLink: "/volunteer-dashboard",
      secondLink: "/history",
      thirdLink: "/wallet",
      forthLink: "/registeras",
    };
  } else if (CURRENT_USER_TYPE === USER_TYPES.NGO) {
    navData = {
      firstMenu: "Dashboard",
      secondMenu: "History",
      forthMenu: "Logout",
      firstLink: "",
      secondLink: "",
      forthLink: "",
    };
  }

  return navData;
};

const logOut = async () => {
  localStorage.clear();
  await fetch("/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default function Header() {
  const history = useHistory();
  const CURRENT_USER_TYPE = localStorage.getItem("type");
  if (!CURRENT_USER_TYPE) {
    history.push("/login");
    history.go();
  }
  const name = localStorage.getItem("name");
  const data = HeaderSet(CURRENT_USER_TYPE);
  console.log("data", data);
  return (
    <div className="header-main navbar navbar-expand-lg navbar-dark bg-dark">
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
      <div className="nav-logo">
        <a className="navbar-brand" href="#">
          {" "}
          FeedIN{" "}
        </a>
      </div>

      <div className="nav-menus">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href={data.firstLink}>
              {data.firstMenu}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={data.secondLink}>
              {data.secondMenu}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={data.thirdLink}>
              {data.thirdMenu}
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => logOut()} className="nav-link" href="/login">
              {data.forthMenu}
            </a>
          </li>
        </ul>
      </div>

      <div className="profile">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              {name}
            </a>
          </li>
          <li className="nav-item">
            <img
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
              alt="image3"
              width="40"
              height="40"
              className="rounded-circle"
              href="/profile"
            />
          </li>
        </ul>
        {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              Tushar Nagre
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"/>
            </a>
          </li>   
        </ul> */}
      </div>

      {/* </nav> */}
    </div>
  );
}
