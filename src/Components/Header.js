import React from "react";
import "./Header.css";

export default function Header() {
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
            <a className="nav-link" aria-current="page" href="/donations">
              Dashbord
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/recent">
              History
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/wallet">
              Wallet
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Login / Register
            </a>
          </li>
        </ul>
      </div>

      <div className="profile">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Tushar Nagre
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
