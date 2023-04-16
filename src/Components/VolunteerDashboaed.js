import React from "react";
import Product from "./Product.js";
import "./volunteerDashboard.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useGetCurrentPosition } from "../Helper/getCurrentLocation.js";
import { toastError, toastSuccess } from "../Helper/toast.js";
let locationData = { lat: null, lng: null };
export default function VolunteerDashboard() {
  const history = useHistory();
  const [donationData, setDonationData] = useState([]);
  // const [locationData, setlocationData] = useState({ lat: null, lng: null });

  const { coords } = useGetCurrentPosition();
  locationData = { lat: coords?.latitude, lng: coords?.longitude };
  const callDonorDashboard = async () => {
    try {
      console.log("coords", locationData);
      const res = await fetch("/active/request", {
        method: "Get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
          location: JSON.stringify(locationData),
        },
      });

      const data = await res.json();
      if (!data.status === 200) {
        toastError("donorDashboard has some error...");
        throw new Error("donorDashboard has some error...");
      }
      return data.data;
    } catch (err) {
      console.log(err);
      history.push("/login");
      // history.go();
    }
  };

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        const data = await callDonorDashboard();
        setDonationData(data);
      }, 100);
    })();
  }, []);
  return (
    <div className="volunteer-dashbord-main-div">
      <div className="food-nearby-title-div">
        <h2 className="food-nearby-title">
          <i className="fa fa-map-marker"></i> Food nearby
        </h2>
      </div>
      <div className="food-nearby-cards-container">
        <dir className="food-nearby-cards">
          {donationData.map((donation, i) => {
            return (
              <Product
                donation={donation}
                key={i}
                locationData={locationData}
              />
            );
          })}
        </dir>
      </div>
    </div>
  );
}
