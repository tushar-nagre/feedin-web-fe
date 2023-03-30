import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./addDonation.css";

export default function AddDonation() {
  const history = useHistory();
  const [doantion, setDonation] = useState({
    chapti_quantity: "",
    dry_bhaji: "",
    wet_bhaji: "",
    rice: "",
    best_before: "",
    food_img: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setDonation({ ...doantion, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const {
      chapti_quantity,
      dry_bhaji,
      wet_bhaji,
      rice,
      best_before,
      food_img,
    } = doantion;

    const res = await fetch("/adddonation", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapti_quantity,
        dry_bhaji,
        wet_bhaji,
        rice,
        best_before,
        food_img,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Doantion");
      console.log("Invalid Doantion");
    } else {
      window.alert("Successful Doantion");
      console.log("Successful Doantion");

      history.push("/profile");
    }
  };

  return (
    <div className="main-add-donation-div">
      <div className="add-donation-form-div">
        <form id="form">
          <div className="chapati-div">
            <label> Chapati </label>
            <input
              type="number"
              name="chapti_quantity"
              placeholder="In quantity"
              value={doantion.chapti_quantity}
              onChange={handleInputs}
            />
          </div>
          <hr className="line"></hr>
          <div className="dry-bhaji-div">
            <label> Dry Bhaji </label>
            <input
              type="number"
              name="dry_bhaji"
              placeholder="In KG"
              value={doantion.dry_bhaji}
              onChange={handleInputs}
            />
          </div>
          <hr className="line"></hr>
          <div className="wet-bhaji-div">
            <label> wet-bhaji </label>
            <input
              type="number"
              name="wet_bhaji"
              placeholder="In KG"
              value={doantion.wet_bhaji}
              onChange={handleInputs}
            />
          </div>
          <hr className="line"></hr>
          <div className="rice-div">
            <label> rice </label>
            <input
              type="number"
              name="rice"
              placeholder="In KG"
              value={doantion.rice}
              onChange={handleInputs}
            />
          </div>
          <hr className="line"></hr>
          <div className="best-before-div">
            <label> Best before </label>
            <input
              type="date"
              id="appt"
              name="best_before"
              value={doantion.best_before}
              onChange={handleInputs}
            />
          </div>
          <hr className="line"></hr>
          <div className="donate-img">
            <label> Upload image </label>
            <input
              type="file"
              id="myFile"
              name="food_img"
              value={doantion.food_img}
              onChange={handleInputs}
            />
          </div>
          <div className="donate-button">
            <button class="donate-button-1" onClick={postData}>
              Donate food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// <div className="main-add-donation-div">
//   <div className="add-donation-form-div">
//     <form id="form">
//       <div className="mb-3">
//         <label className="form-label">Food Name</label>
//         <input
//           type="text"
//           className="form-control"
//           name="name"
//           placeholder="Food name"
//         />
//       </div>

//       <div className="add-substract-btn-group">
//         <button type="button" className="button button3">
//           -
//         </button>
//         <label className="form-label"> 1 </label>
//         <button type="button" className="button button3">
//           +
//         </button>
//         <select id="quantity" name="quantity">
//           <option value="KG">KG</option>
//           <option value="LTR">LTR</option>
//           <option value="Piece">Piece</option>
//         </select>
//       </div>

//       <div className="best-before">
//         <label for="appt">Best before:</label>
//         <input type="time" id="appt" name="appt"></input>
//       </div>
//       <div className="donate-btn">
//         <button type="submit" className="btn">
//           Donate
//         </button>
//       </div>
//     </form>
//   </div>
// </div>;
