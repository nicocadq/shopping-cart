import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { deleteFromCart } from "../../reducers/cart";

import "./CartItem.css";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteFromCart(product));
  };

  return (
    <div className="cart__product">
      <div className="product__name">{product.title}</div>
      <button className="product__delete-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default CartItem;
