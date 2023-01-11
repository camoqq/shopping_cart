import React from "react";
import "./App.css";

const Product = ({ items, onAdd }) => {
  return (
    <li className="sma">
      <div>
        <h3>{items.name}</h3>
        <img src={items.image} alt={items.name} />
        <h4>${items.cost}</h4>
        <button onClick={() => onAdd(items)} className="b">
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default Product;
