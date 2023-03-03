import React from "react";
import "./Product.css";

export default function Product(props) {
  console.log("ffdxcgvmb", props);
  return (
    <>
      <div className="card-group">
        <div className="main-card">
          <div className="img-div">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <hr />
          <div className="card-details">
            <div className="name-rating">
              <div className="usrname">
                <p>Tushar Nagre</p>
              </div>
              <div className="rating-box">
                <p>
                  4.0 <span>⭐</span>
                </p>
              </div>
            </div>
            <div className="type-qty">
              <div className="food-type">
                <p>Biryani</p>
              </div>
              <div className="food-qty">
                <p>5 kg</p>
              </div>
            </div>
            <div className="food-dist">
              <p>1.2km from your location</p>
            </div>
            <div className="best-before">
              <p>Best Before 5 hrs</p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div classNameName="card mb-3">
    //   <div classNameName="row g-0">
    //     <div classNameName="col-md-4">
    //       <img src="./assets/images/logos.png" classNameName="img-fluid rounded-start" alt="..." />
    //     </div>

    //     <div classNameName="col-md-8">
    //         <div classNameName="container1">
    //           <h5 classNameName="card-title">{props.donation.donarName}</h5>
    //           <button type="button" classNameName="btn btn-primary">5 ⭐</button>
    //           <p>Biryani</p>
    //           <p classNameName="card-text">{props.donation.foodQuantity}</p>
    //         </div>

    //         <div classNameName="footer">
    //           <p classNameName="card-text"><small classNameName="text-muted">{props.donation.distance} KM from your location.</small></p>
    //         </div>
    //     </div>
    //   </div>
    // </div>
  );
}
