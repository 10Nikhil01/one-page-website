import React, { useState } from "react";
import "./Product.css";
import { ReactComponent as Star } from "./Logo/Star.svg";

function Product({setNumber}) {
  const userResponse = [];
  const [allResponses, setAllResponses] = React.useState([]);
  const [stopInfiniteLoop, setStopInfiniteLoop] = React.useState(false);
  if (!stopInfiniteLoop) {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        for (const i in data) {
          console.table(
            data[i].id,
            data[i].productImage,
            data[i].productName,
            data[i].oldPrice,
            data[i].newPrice
          );
          userResponse.push({
            id: data[i].id,
            productImage: data[i].productImage,
            productName: data[i].productName,
            oldPrice: data[i].oldPrice,
            newPrice: data[i].newPrice,
          });
        }
        setAllResponses(userResponse);
      });
    setStopInfiniteLoop(true);
  }
  const handleCart = () => {
    setNumber(prevCount=> prevCount+1)
  };
  return (
    <div className="product">
      <h3>Products</h3>
      <div className="row">
        {allResponses &&
          allResponses.map((item) => {
            return (
              <div className="row-item" key={item.id}>
                <div className="img-container">
                  <img src={item.productImage} alt={item.productName}></img>
                </div>
                <div className="data">
                  <h4>{item.productName}</h4>
                  <div className="star-price">
                    <div className="stars">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                    <div className="price">
                      <h6>{item.oldPrice}/- </h6>
                      <h5>{item.newPrice}/-</h5>
                    </div>
                  </div>
                </div>
                <button type="submit" onClick={() => handleCart()}>
                  ADD TO CART
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
