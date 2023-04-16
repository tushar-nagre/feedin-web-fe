import React from "react";
import "./recentProduct.css";
import Moment from "moment";
import { useHistory } from "react-router-dom";

export default function RecentProduct(props) {
  console.log("ffdxcgvmb--->", props);
  const history = useHistory();
  const getFoodName = (donation) => {
    let value = null;
    if (donation.chapti_quantity > 0) {
      value = "Chapti";
    }
    if (donation.dry_bhaji > 0) {
      value = value ? value + ", Dry Bhaji" : "Dry Bhaji";
    }
    if (donation.wet_bhaji > 0) {
      value = value ? value + ", Wet Bhaji" : "Wet Bhaji";
    }
    if (donation.rice > 0) {
      value = value ? value + ", Rice" : "Rice";
    }
    return value;
  };
  const getStatus = (status) => {
    if (status === 1) {
      return "pending";
    }
    if (status === 2) {
      return "waiting for response";
    }
    if (status === 3) {
      return "fullfilled";
    }
    if (status === 4) {
      return "expired";
    }
  };
  const onCardClick = () => {
    history.push("/donor-accept-request");
    history.go();
  };
  return (
    <>
      <div
        className={
          "card-group " + (props.donation.status === 2 ? "showHover" : "")
        }
        onClick={props.donation.status === 2 ? () => onCardClick() : undefined}
      >
        <div className="main-card">
          <div className="img-div">
            <img src={props.donation.food_img} alt="" />
          </div>
          <hr />
          <div className="card-details">
            {props.donation.donatedTo && (
              <jsx>
                <div className="donted-to-div">
                  <p className="small-text">Donated to</p>
                </div>
                <div className="name-rating">
                  <div className="usrname">
                    <h6>{props.donation.donatedTo}</h6>
                  </div>
                </div>
                <div className="donated-on-div">
                  <p className="small-text">Donated on</p>
                </div>
                <div className="donated-on-date-div">
                  <div className="usrname">
                    <h6>
                      {Moment(props.donation.food_img).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    </h6>
                  </div>
                </div>
              </jsx>
            )}
            <div className="type-qty">
              <div className="food-type">
                <p>{getFoodName(props.donation)}</p>
              </div>
            </div>

            <div className="donted-to-div">
              <p className="medium-text">
                Status: {getStatus(props.donation.status)}
              </p>
            </div>

            <div className="donted-to-div">
              <p className="medium-text">
                Best Before:{" "}
                {Moment(props.donation.best_before).format(
                  "MMMM Do YYYY, h:mm a"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
