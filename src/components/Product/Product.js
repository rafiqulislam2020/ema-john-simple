import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <div className="product-aliment">
                    <p><small>by:{seller}</small></p>
                    <p>${price}</p>
                    <p><small>Only {stock} left in stock - Order soon</small></p>
                    <button 
                    className="add-to-cart-btn" 
                    onClick={()=>props.handleAddProduct(props.product)}> 
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;