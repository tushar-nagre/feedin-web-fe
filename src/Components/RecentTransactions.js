import React from "react";
import RecentProduct from "./RecentProduct";
import "../Components/recentTransactions.css";
export default function RecentTransactions(props) {
  return (
    <div className="recent-transactions-main-div">
      <div className="recent-title-div">
        <h2 className="recent-title">
          <i class="fas fa-clock"></i> Recent Donations
        </h2>
      </div>
      <div className="recent-donations-cards-container">
        <dir className="recent-donations-cards">
          {props.donationsItems.map((donation, i) => {
            return (
              <>
                <RecentProduct donation={donation} key={i} />
              </>
            );
          })}
        </dir>
      </div>
      <div className="recent-donation-page-donate-button">
        <a href="/donate">
          <button class="recent-page-donate-button">Donate food</button>
        </a>
      </div>
    </div>
  );
}
