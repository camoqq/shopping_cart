import React, { useContext } from "react";
import Product from "./Product";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./ContextComp";

const Main = ({ products, onAdd }) => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <div className="header">
        <h2>Products</h2>
        <div className="icon">
          <p>
            <FaShoppingCart size={30} />
          </p>
          <span>{cart.length}</span>
        </div>
      </div>

      <div>
        <ul className="products">
          {products.map((items) => (
            <Product items={items} onAdd={onAdd} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
