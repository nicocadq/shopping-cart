import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Product from "../../components/Product";

import "./ProductGallery.css";

const ProductGallery = () => {
  const products = useSelector((state) => state.products);

  const renderProduct = (product) => (
    <Product key={product.id} product={product} />
  );

  return (
    <div className="gallery-container">
      <Link to="/cart">
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </Link>
      <div className="product-gallery">
        {products.map((product) => renderProduct(product))}
      </div>
    </div>
  );
};

export default ProductGallery;
