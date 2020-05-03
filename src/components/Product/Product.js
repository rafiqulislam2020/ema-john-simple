import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">
                <Link to={"/product/" + key}>{name}</Link>
            </h4>
                <br />
                <div className="product-aliment">
                    <p>
                        <small>by:{seller}</small>
                    </p>
                    <p>${price}</p>
                    <p>
                        <small>Only {stock} left in stock - Order soon</small>
                    </p>
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