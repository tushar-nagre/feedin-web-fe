import React from "react";
import wallet from "./wallet.css";
import { useState } from "react";
import { useEffect } from "react";
import { dateTimeFormat } from "../Helper/utils";

export default function Profile() {
  const [userData, setUserData] = useState({});
  const getProfile = async () => {
    try {
      const res = await fetch("/profile", {
        method: "Get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "include",
        },
      });

      const data = await res.json();
      console.log("donationData**", userData);
      if (!data.status === 200) {
        throw new Error("donorDashboard has some error...");
      }
      return data.data;
    } catch (err) {
      console.log(err);
    }
  };
  const Row = (props, index) => (
    <tr index={props.key}>
      <td>{dateTimeFormat(props.data.creditedDate)}</td>
      <td>{props.data.flemsCredited}</td>
    </tr>
  );
  useEffect(() => {
    (async () => {
      const data = await getProfile();
      setUserData(data);
    })();
  }, []);
  return (
    <div className="main-wallet-div">
      <div className="profile-name-div">
        <h5>Wallet</h5>
      </div>
      <div className="wallet-card">
        <div className="hey-wallet-div">
          <h5> Hey {userData.name}, </h5>
        </div>
        <div className="flame-wallet-div">
          <h2>{userData.walletFlems} 🔥</h2>
        </div>
        <div className="accumulated-wallet-div">
          <h6>Accumulated Donation Rewards</h6>
        </div>
        <div className="accumulated-wallet-div">
          <h5>Transactions</h5>
        </div>
        {userData.walletHistory && userData.walletHistory.length > 0 && (
          <div className="table-wallet-div">
            <table>
              <tr>
                <th>Date And Time</th>
                <th>Amount of 🔥</th>
              </tr>
              <tbody>
                {userData.walletHistory.map((x, i) => (
                  <Row key={i} data={x} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
