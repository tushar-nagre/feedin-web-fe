import React from "react";
import "./Product.css";
import { dateTimeFormat, getFoodName } from "../Helper/utils";
import { useEffect } from "react";
import { useState } from "react";
import { toastError, toastSuccess } from "../Helper/toast";
let locationData;
export default function Product(props) {
  console.log("ffdxcgvmb", props);
  const [donation, setDonation] = useState(props.donation);
  locationData = props.locationData;
  const requestOrder = async (request) => {
    if (request.status === 1) {
      const res = await fetch("/request/place", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // food_name,
          orderId: request._id,
          location: locationData,
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        toastError("Invalid Doantion");
        console.log("Invalid Doantion");
      } else {
        props.donation.status = 2;
        setDonation(props.donation);
        toastSuccess("Successful Request");
        console.log("Successful Request");
      }
      return true;
    } else if (request.status === 3) {
      // call now logic
    }
  };
  const buttonText = (request) => {
    if (request.status === 1) {
      return "Request";
    }
    if (request.status === 2) {
      return "Pending";
    }
    if (request.status === 3) {
      return "Call Now";
    }
  };
  useEffect(() => {}, [props.donation]);
  return (
    <>
      <div className="card-group-product">
        {/* <a href="/details"> */}
        <div className="main-card-product">
          <div className="img-div-product">
            <img src={donation.food_img} alt="" />

            <div className="requestbutton">
              <button
                disabled={
                  donation.status === 1 || donation.status === 3 ? false : true
                }
                onClick={() => requestOrder(donation)}
                className="requestbutton"
              >
                {buttonText(donation)}
              </button>
            </div>
          </div>

          <hr />
          <div className="card-details-product">
            <div className="name-rating">
              <div className="usrname">
                <p>{donation.donor.name}</p>
              </div>
              <div className="rating-box">
                <p>
                  4.0 <span>⭐</span>
                </p>
              </div>
            </div>
            <div className="food-dist">
              <p>{getFoodName(donation)}</p>
            </div>
            <div className="food-dist">
              <p>{donation.distance} from your location</p>
            </div>
            <a
              target="_blank"
              href={`https://www.google.com/maps/search/?api=1&query=${donation?.donorLocation.lat},${donation?.donorLocation.lng}`}
              rel="noreferrer"
            >
              <div className="food-dist">
                <p>Address: {donation.donorAddress}</p>
              </div>
            </a>
            <div className="best-before">
              <p>Donate At {dateTimeFormat(donation.best_before)}</p>
            </div>
            <div className="best-before">
              <p>Best Before {dateTimeFormat(donation.best_before)}</p>
            </div>
          </div>
        </div>
        {/* </a> */}
      </div>
    </>
    // <div classNameName="card mb-3">
    //   <div classNameName="row g-0">
    //     <div classNameName="col-md-4">
    //       <img src="./assets/images/logos.png" classNameName="img-fluid rounded-start" alt="..." />
    //     </div>

    //     <div classNameName="col-md-8">
    //         <div classNameName="container1">
    //           <h5 classNameName="card-title">{props.donation.donarName}</h5>
    //           <button type="button" classNameName="btn btn-primary">5 ⭐</button>
    //           <p>Biryani</p>
    //           <p classNameName="card-text">{props.donation.foodQuantity}</p>
    //         </div>

    //         <div classNameName="footer">
    //           <p classNameName="card-text"><small classNameName="text-muted">{props.donation.distance} KM from your location.</small></p>
    //         </div>
    //     </div>
    //   </div>
    // </div>
  );
}
