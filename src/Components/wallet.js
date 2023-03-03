import React from "react";
import wallet from "./wallet.css";

export default function Profile() {
  return (
    <div className="main-wallet-div">
      <div className="profile-name-div">
        <h5>Wallet</h5>
      </div>
      <div className="wallet-card">
        <div className="hey-wallet-div">
          <h5> Hey Tushar, </h5>
        </div>
        <div className="flame-wallet-div">
          <h2>30 🔥</h2>
        </div>
        <div className="accumulated-wallet-div">
          <h6>Accumulated Donation Rewards</h6>
        </div>
        <div className="accumulated-wallet-div">
          <h5>Transactions</h5>
        </div>
        <div className="table-wallet-div">
          <table>
            <tr>
              <th>Date And Time</th>
              <th>Amount of 🔥</th>
            </tr>
            <tr>
              <td>date | time</td>
              <td>10 🔥</td>
            </tr>
            <tr>
              <td>date | time </td>
              <td>10 🔥</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
