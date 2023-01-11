import React, { useContext } from "react";
import { CartContext } from "./ContextComp";

const Cart = ({ onAdd, onRemove, del }) => {
  const { cart } = useContext(CartContext);

  const itemPrice = cart.reduce((a, c) => a + c.cost * c.qty, 0);
  const tax = itemPrice * 0.15;
  const shipping = itemPrice < 30 ? 0 : 20;
  const total = itemPrice + tax + shipping;
  return (
    <div className="container">
      <div className="header">
        <h2>Cart Items</h2>
      </div>

      {/* ------------------------------------------------- */}
      <div className="fer">
        <div className="lef">
          {cart.length === 0 && <p>cart is empty</p>}
          {cart.map((item) => (
            <div key={item.id} className="row">
              <div>{item.name}</div>
              <div>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
                <button onClick={() => del(item)} className="del">
                  delete
                </button>
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>

              <div className="col-3 text-right">
                {item.qty} x ${item.cost.toFixed(2)}
              </div>
            </div>
          ))}
          {/* --------------------------------------------- */}
          <div>
            {cart.length !== 0 && (
              <>
                <div className="raw">
                  <div>Item Price</div>

                  <div>{itemPrice.toFixed(2)}</div>
                </div>
                <div className="raw">
                  <div>Tax</div>

                  <div>{tax.toFixed(2)}</div>
                </div>
                <div className="raw">
                  <div>Shipping</div>

                  <div>{shipping.toFixed(2)}</div>
                </div>
                <hr />
                <div className="raw">
                  <div>Total</div>

                  <div>{total.toFixed(2)}</div>
                </div>
                <button
                  className="btn"
                  onClick={() => alert("Proceed to check out?")}
                >
                  Check Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
