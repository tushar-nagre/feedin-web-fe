import React from "react";
import "./recentProduct.css";

export default function RecentProduct(props) {
  console.log("ffdxcgvmb", props);
  return (
    <>
      <div className="card-group">
        <div className="main-card">
          <div className="img-div">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <hr />
          <div className="card-details">
            <div className="donted-to-div">
              <p className="small-text">Donated to</p>
            </div>
            <div className="name-rating">
              <div className="usrname">
                <h6>Tushar Nagre</h6>
              </div>
            </div>
            <div className="type-qty">
              <div className="food-type">
                <p>Biryani</p>
              </div>
            </div>
            <div className="donated-on-div">
              <p className="small-text">Donated on</p>
            </div>
            <div className="donated-on-date-div">
              <div className="usrname">
                <h6>26 MAR 2023 | 20:30 </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
