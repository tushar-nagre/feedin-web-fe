import React from "react";
import Product from "./Product.js";

export default function Donations(props) {
  return props.donationsItems.map((donation, i) => {
    return <Product donation={donation} key={i} />;
  });
}
