import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { addToCart } from "../../reducers/cart";

import "./Product.css";

const Product = ({ product }) => {
  const [isAdded, setIsAdded] = useState(
    useSelector((state) => state.products_in_cart[product.id])
  );

  const { image, title, price } = product;

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isAdded) {
      dispatch(addToCart({ product }));
      setIsAdded(!isAdded);
    }
  };

  return (
    <div className="product">
      <img className="product__img" src={image} alt={title} />
      <div className="product__body">
        <h3 className="product__title">{title}</h3>
        <span className="product__price">{price}</span>
        <button
          className={`product__button ${
            isAdded ? "product__button--disable" : ""
          }`}
          onClick={handleClick}
          disabled={isAdded ? "disable" : ""}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default Product;
