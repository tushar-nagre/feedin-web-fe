/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import RecentProduct from "./RecentProduct";
import "../Components/donorDashboard.css";
import { useHistory } from "react-router-dom";
import { toastError } from "../Helper/toast";

export default function DonorDashboard() {
  const history = useHistory();
  const [donationData, setDonationData] = useState([]);
  const callDonorDashboard = async () => {
    try {
      const res = await fetch("/get/donations/history", {
        method: "Get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
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
      const data = await callDonorDashboard();
      setDonationData(data);
    })();
  }, []);

  return (
    <div className="recent-transactions-main-div">
      {donationData.length === 0 ? (
        <>
          <h3>No Recent Donation </h3>
        </>
      ) : (
        <>
          <div className="recent-title-div">
            <h2 className="recent-title">
              <i className="fas fa-clock"></i> Recent Donations
            </h2>
          </div>
          <div className="recent-donations-cards-container">
            <dir className="recent-donations-cards">
              {donationData.map((donation, i) => {
                return (
                  <>
                    <RecentProduct donation={donation} key={i} />
                  </>
                );
              })}
            </dir>
          </div>
        </>
      )}
      <>
        <div className="recent-donation-page-donate-button">
          <a href="/donate">
            <button className="recent-page-donate-button">Donate food</button>
          </a>
        </div>
      </>
    </div>
  );
}
