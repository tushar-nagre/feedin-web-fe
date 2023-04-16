import "./App.css";
// import { useState } from "react";
import { Route, Switch } from "react-router-dom";
// import Login from "./Components/textBox";
// import Login from "./Components/Login";
import Header from "./Components/Header";
import VolunteerDashboaed from "./Components/VolunteerDashboaed";
import Login from "./Components/Login";
import RegisterAs from "./Components/registerAs";
import DonorRegistration from "./Components/donorRegistration.js";
import VolunteerRegistration from "./Components/volunteerRegistration.js";
import NGORegistration from "./Components/ngoRegistration.js";
import DonationDetails from "./Components/donationDetails.js";
import Profile from "./Components/profile.js";
import Wallet from "./Components/wallet.js";
import ErrorPage from "./Components/error";
import DonorDashboard from "./Components/DonorDashboard";
import AddDonation from "./Components/AddDonation";
import ThankYou from "./Components/ThankYou";
import ForgotPassword from "./Components/ForgotPassword";
import AcceptRequest from "./Components/AcceptRequestCard";
import VolunteerDashboard from "./Components/VolunteerDashboaed";
import History from "./Components/History";
import { ToastContainer } from "react-toastify";
import TermsCondition from "./Components/TermsCondition";

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
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/donations">
          <VolunteerDashboaed donationsItems={donationsItems} />
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
        <Route path="/details">
          <Header />
          <DonationDetails />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/donate">
          <Header />
          <AddDonation />
        </Route>
        <Route path="/donor-accept-request">
          <Header />
          <AcceptRequest />
        </Route>
        <Route path="/thankyou">
          <Header />
          <ThankYou />
        </Route>
        <Route path="/history">
          <Header />
          <History donationsItems={donationsItems} />
        </Route>
        <Route path="/wallet">
          <Header />
          <Wallet />
        </Route>
        <Route path="/donor-dashboard">
          <Header />
          <DonorDashboard donationsItems={donationsItems} />
        </Route>
        <Route path="/dashboard">
          <Header />
          <VolunteerDashboard />
        </Route>
        <Route path="/forgotpass">
          <ForgotPassword />
        </Route>
        <Route path="/accept-request">
          <AcceptRequest />
        </Route>
        <Route path="/termsandcondition">
          <TermsCondition />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;

// const USER_TYPES = {
//   DONOR: "Donor",
//   VOLUNTEER: "Volunteer",
//   NGO: "Ngo",
// };

// const CURRENT_USER_TYPE = USER_TYPES.VOLUNTEER;

// const HeaderSet = () => {
//   let navData;

//   if (CURRENT_USER_TYPE === USER_TYPES.DONOR) {
//     navData = {
//       firstMenu: "Dashboard",
//       secondMenu: "History",
//       thirdMenu: "Wallet",
//       forthMenu: "Logout",
//     };
//   } else if (CURRENT_USER_TYPE === USER_TYPES.VOLUNTEER) {
//     navData = {
//       firstMenu: "Dashboard",
//       secondMenu: "History",
//       thirdMenu: "Wallet",
//       forthMenu: "Logout",
//     };
//   } else if (CURRENT_USER_TYPE === USER_TYPES.NGO) {
//     navData = {
//       firstMenu: "Dashboard",
//       secondMenu: "History",
//       thirdMenu: "Wallet",
//       forthMenu: "Logout",
//     };
//   }
// };
