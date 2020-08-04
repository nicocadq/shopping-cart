import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { addToCart } from '../../reducers/cart';

import './Product.css';

const Product = ({ product }) => {
    const [wasAdded, setWasAdded] = useState(false);

    const { imagen, titulo, precio } = product;

    const dispatch = useDispatch();

    const handleClick = () => {
        if (!wasAdded) {
            dispatch(addToCart({ product }))
            setWasAdded(!wasAdded);
        }
    };

    return (
        <div className="product">
            <img className="product__img" src={imagen} alt={titulo} />
            <div className="product__body">
                <h3 className="product__title">{titulo}</h3>
                <span className="product__price">{precio}</span>
                <button className={`product__button ${wasAdded ? 'product__button--disable' : ''}`}
                    onClick={handleClick}
                    disabled={wasAdded ? 'disable' : ''}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    );

}

export default Product;