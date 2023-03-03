import "./App.css";
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
      {/* <Donations donationsItems={donationsItems} /> */}
      {/* <Login /> */}
      {/* {<RegisterAs />} */}
      <DonorRegistration />
      {/* <VolunteerRegistration /> */}
      {/* <NGORegistration /> */}
      {/* <DonationDetails /> */}
      {/* <Profile /> */}
      {/* <Wallet /> */}
    </div>
  );
}

export default App;
