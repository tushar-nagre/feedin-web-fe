import "./App.css";
// import { useState } from "react";
import { Route, Switch } from "react-router-dom";
// import Login from "./Components/textBox";
// import Login from "./Components/Login";
import Header from "./Components/Header";
import Donations from "./Components/Donations";
import Login from "./Components/Login";
import RegisterAs from "./Components/registerAs";
import DonorRegistration from "./Components/donorRegistration.js";
import VolunteerRegistration from "./Components/volunteerRegistration.js";
import NGORegistration from "./Components/ngoRegistration.js";
import DonationDetails from "./Components/donationDetails.js";
import Profile from "./Components/profile.js";
import Wallet from "./Components/wallet.js";
import ErrorPage from "./Components/error";
import RecentDonations from "./Components/RecentTransactions";
import AddDonation from "./Components/AddDonation";
import ThankYou from "./Components/ThankYou";

function App() {
  const donationsItems = [
    {
      donarName: "Tushar Nagre",
      foodItem: "Biryani",
      foodQuantity: "5 kg",
      distance: 2,
      bestBeforeInHours: 5,
    },
    {
      donarName: "Tushar Nagre",
      foodItem: "Biryani",
      foodQuantity: "5 kg",
      distance: 2,
      bestBeforeInHours: 5,
    },
    {
      donarName: "Tushar Nagre",
      foodItem: "Biryani",
      foodQuantity: "5 kg",
      distance: 2,
      bestBeforeInHours: 5,
    },
    {
      donarName: "Tushar Nagre",
      foodItem: "Biryani",
      foodQuantity: "5 kg",
      distance: 2,
      bestBeforeInHours: 5,
    },
    {
      donarName: "Tushar Nagre",
      foodItem: "Biryani",
      foodQuantity: "5 kg",
      distance: 2,
      bestBeforeInHours: 5,
    },
  ];
  return (
    <div className="MainContainer">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/donations">
          <Donations donationsItems={donationsItems} />
        </Route>
        <Route path="/register">
          <RegisterAs />
        </Route>
        <Route path="/registerdonor">
          <DonorRegistration />
        </Route>
        <Route path="/registervolunteer">
          <VolunteerRegistration />
        </Route>
        <Route path="/registerngo">
          <NGORegistration />
        </Route>
        <Route path="/donations/details">
          <DonationDetails />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/donate">
          <AddDonation />
        </Route>
        <Route path="/wallet">
          <Wallet />
        </Route>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
        <Route path="/recent">
          <RecentDonations donationsItems={donationsItems} />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
