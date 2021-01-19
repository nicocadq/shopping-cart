import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import CartItem from "./CartItem";

import "./Cart.css";

const Cart = () => {
  const productsInCart = useSelector((state) => state.productsInCart);

  const keysProductsInCart = Object.keys(productsInCart);

  const renderCartItem = (product) => {
    return <CartItem key={product.id} product={product} />;
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <Link to="/">
          <div className="cart__arrow-back">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Link>
        <span className="cart__text">Shopping Cart</span>
        <div className="cart__icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
      <div className="cart__body">
        <div className="cart__items">
          {keysProductsInCart.length > 0 ? (
            keysProductsInCart.map((key) => renderCartItem(productsInCart[key]))
          ) : (
            <h3>You have not products in the cart.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
