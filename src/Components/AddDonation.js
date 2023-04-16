import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./addDonation.css";
import { useGetCurrentPosition } from "../Helper/getCurrentLocation";
import { toastError, toastSuccess } from "../Helper/toast";

// import { getCurrentPosition } from "../Helper/getCurrentLocation";

export default function AddDonation() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGetCurrentPosition();
  // isGeolocationAvailable later to redirect to donation list
  // isGeolocationEnabled if not ask to give permission
  // console.log("coords", coords.latitude, coords.longitude);
  const history = useHistory();
  const [doantion, setDonation] = useState({
    // food_name: "",
    chapti_quantity: "",
    dry_bhaji: "",
    wet_bhaji: "",
    rice: "",
    best_before: "",
    food_img: "",
    address: "",
    location: {
      lat: coords?.latitude,
      lng: coords?.longitude,
    },
  });

  const handleInputs = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDonation({ ...doantion, [name]: value });
    console.log("doantion", doantion);
  };

  const handleUploadFile = async (e) => {
    console.log(e);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    let fileResponse = await fetch("/upload", {
      method: "post",
      body: data,
    });
    fileResponse = await fileResponse.json();
    fileResponse = fileResponse.data;
    console.log("fileResponse", fileResponse);
    setDonation({
      ...doantion,
      food_img: fileResponse.filename,
    });
    console.log("doantion", doantion);
  };
  const postData = async (e) => {
    e.preventDefault();
    console.log("coords", coords);
    const {
      // food_name,
      chapti_quantity,
      dry_bhaji,
      wet_bhaji,
      rice,
      best_before,
      food_img,
      address,
    } = doantion;
    console.log("food_img", food_img);
    const res = await fetch("/adddonation", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // food_name,
        chapti_quantity,
        dry_bhaji,
        wet_bhaji,
        rice,
        best_before,
        food_img,
        address,
        location: {
          lat: coords?.latitude,
          lng: coords?.longitude,
        },
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      toastError("Invalid Doantion");
      console.log("Invalid Doantion");
    } else {
      toastSuccess("Successful Doantion");
      console.log("Successful Doantion");

      history.push("/donor-dashboard");
      history.go();
    }
  };

  return (
    <div className="main-add-donation-div">
      <div className="add-donation-form-div">
        <form id="form">
          {/* <div className="chapati-div">
            <label> Food Name </label>
            <input
              type="text"
              name="food_name"
              placeholder="Food name"
              value={doantion.food_name}
              onChange={handleInputs}
            />
          </div>
          <hr className="line"></hr> */}
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
          <div className="best-before-div">
            <label> Address </label>
            <input
              type="text"
              id="appt"
              name="address"
              value={doantion.address}
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
              onChange={handleUploadFile}
            />
            <img className="uploadimg" alt="" src={`${doantion.food_img}`} />
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
