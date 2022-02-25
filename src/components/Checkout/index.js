import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct";
import Subtotal from "../Subtotal";
import "./Checkout.css";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div style={{ overflowAnchor: "none" }}>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <FlipMove duration="700" easing="cubic-bezier(0.19, 1, 0.22, 1)">
            {basket.map((item, i) => (
              <CheckoutProduct key={item.id} {...item} index={i} />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
