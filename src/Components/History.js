import React from "react";
import RecentProduct from "./RecentProduct";
import "../Components/history.css";
import { useEffect } from "react";
import { useState } from "react";

export default function History(props) {
  const [donationData, setDonationData] = useState([]);
  console.log("donationData", donationData);
  const callHistoryDashboard = async () => {
    try {
      const res = await fetch("/history", {
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
      return data.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    (async () => {
      const data = await callHistoryDashboard();
      setDonationData(data);
    })();
  }, []);
  return (
    <div className="history-main-div">
      <div className="history-title-div">
        <h2 className="history-title">
          <i class="fas fa-clock"></i> Recent Donations
        </h2>
      </div>
      {donationData.length === 0 ? (
        <jsx>
          <h3>No Recent Donation </h3>
        </jsx>
      ) : (
        <div className="history-donations-cards-container">
          <dir className="history-donations-cards">
            {donationData.map((donation, i) => {
              return (
                <>
                  <RecentProduct donation={donation} from="history" />
                </>
              );
            })}
          </dir>
        </div>
      )}
    </div>
  );
}
