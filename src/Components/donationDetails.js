import React from "react";
import donationDetails from "./donationDetails.css";

export default function DonationDetails() {
  return (
    <div className="donation-details-main">
      <div className="details-text">Donation Details</div>
      <div className="card detail-card">
        <div className="donation-details-image">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="./assets/images/food.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./assets/images/food.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./assets/images/food.png"
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
          {/* <img src="./assets/images/food.png" className="card-img-top" /> */}
        </div>

        <div className="card-body-1">
          <div className="card-body-1-field-1">
            <span className="card-text-1">Donated By</span>
          </div>
          <div className="card-body-1-field-2">
            <h5 className="card-title">Tushar Nagre</h5>
            <div className="rating-box">
              <p>
                4.0 <span>⭐</span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="card-body-2">
          <div className="card-body-2-field-1">
            <h5 className="card-title">Biryani</h5>
            <p>
              5 <span>KG</span>
            </p>
          </div>
        </div>
        <div className="card-body-3">
          <div className="card-body-3-field-1">
            <span className="card-text-1">Donated on</span>
          </div>
          <div className="card-body-3-field-2">
            <h5 className="card-text">5 Hours From Donated Time</h5>
          </div>
        </div>
        <br />
        <div className="card-body-4">
          <div className="card-body-3-field-1">
            <span className="card-text-1">Address</span>
          </div>
          <div className="card-body-3-field-2">
            <h5 className="card-text">Vimal house, sector 24, Nigdi, Pune.</h5>
          </div>
        </div>
        <br />
        <div className="card-body-5">
          <div className="donation-details-button-2">
            <a href="#" className="btn btn-primary">
              Request Food
            </a>
          </div>
        </div>
      </div>
      <script>$('.carousel').carousel();</script>
    </div>
  );
}
