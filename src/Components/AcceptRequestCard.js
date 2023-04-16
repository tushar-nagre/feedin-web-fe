/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./donationDetails.css";
import "./acceptRequestCard.css";
import { dateTimeFormat, getFoodName } from "../Helper/utils";
import { toastSuccess } from "../Helper/toast";

export default function AcceptRequestCard() {
  const history = useHistory();
  const [donationRequest, setDonationRequest] = useState([]);
  const orderAccept = async (donation) => {
    try {
      const res = await fetch("/donor/order/accept", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
        body: JSON.stringify({
          orderId: donation._id,
        }),
      });
      const data = await res.json();
      if (!data.status === 200) {
        throw new Error("Order accept has some error...");
      }
      callDonorDashboard();
      toastSuccess("order accepted suceesfully");
      //alert("order accepted suceesfully");
    } catch (e) {
      alert(e);
    }
  };

  const callDonorDashboard = async () => {
    try {
      const res = await fetch("/donation/accept/request", {
        method: "Get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });

      const data = await res.json();
      if (!data.status === 200) {
        throw new Error("donorDashboard has some error...");
      }
      setDonationRequest(data.data);
      return data.data;
    } catch (err) {
      console.log(err);
      history.push("/login");
      // history.go();
    }
  };

  useEffect(() => {
    // console.log("ddddd", location.state.detail);
    (async () => {
      const data = await callDonorDashboard();
      setDonationRequest(data);
    })();
  }, []);

  return (
    // <h1>Hellooooooo T</h1>
    <div className="accept-requests-main-div">
      <div className="details-text">
        <h3>
          <i className="fa fa-paper-plane"> </i> Donation requests
        </h3>
      </div>
      <div className="accept-requests-cards-container">
        <div className="accept-requests-cards">
          {donationRequest.length === 0 ? (
            <jsx>
              <h3>No Request is waiting for your response </h3>
            </jsx>
          ) : (
            donationRequest.map((donation, i) => {
              return (
                <div className="donation-details-main">
                  <div className="card detail-card">
                    <div className="donation-details-image">
                      <img
                        src={donation.food_img}
                        className="card-img-top"
                        alt="food"
                      />
                    </div>
                    <div>
                      <div className="card-body-1">
                        <div className="card-body-1-field-1">
                          <span className="card-text-1">Requested Name</span>
                        </div>
                        <div className="card-body-1-field-2">
                          <h5 className="card-title">{`${donation.user.name} (${
                            donation.isVolunteer ? "Volunteer" : "NGO"
                          })`}</h5>
                        </div>
                      </div>
                      {/* <div>
                        <div className="card-body-1-field-1">
                          <span className="card-text-1">Requested By</span>
                        </div>
                        <div className="card-body-1-field-2">
                          <h5 className="card-title">
                            {donation.isVolunteer ? "Volunteer" : "NGO"}
                          </h5>
                        </div>
                      </div> */}
                    </div>
                    <br />
                    {/* <div className="card-body-2">
              <div className="card-body-2-field-1">
                <h5 className="card-title">donation.address</h5>
                <p>
                  5 <span>KG</span>
                </p>
              </div>
            </div> */}

                    <div className="type-qty">
                      <div className="food-type">
                        <p>{getFoodName(donation)}</p>
                      </div>
                    </div>

                    <div className="card-body-3">
                      <div className="card-body-3-field-1">
                        <span className="card-text-1">Requested At</span>
                      </div>
                      <div className="card-body-3-field-2">
                        <h5 className="card-text">
                          {dateTimeFormat(donation.currentRequestdAt)}
                        </h5>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="card-body-5">
                      <div className="donation-details-button-2">
                        <button
                          className="btn btn-primary"
                          onClick={() => orderAccept(donation)}
                        >
                          Accept Order
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <script>$('.carousel').carousel();</script> */}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
