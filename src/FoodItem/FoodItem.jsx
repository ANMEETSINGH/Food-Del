import React, { useState, useContext } from "react";
import "./FoodItem.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  //this itemCount show the number of items selected
  // const [itemCount, setItemCount] = useState(0); previously we use this to count items but now we use cartItems
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    // here is the food item details where we show all the details
    <div className="food=item">
      {/* first thing is food item image we show this inside a div container */}
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
          </div>
        )}
      </div>
      {/* after image we show information of food item */}
      <div className="food-item-info">
        {/* info first is name and rating */}
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
