import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Product = ({ product : { price, discount, _id, info, name, model }, onClick }) => {

    const beforeDiscount = price / (100 - discount) * 100;
    
    return ( 
        <>
            <Link to={`/product/${_id}`} className="flex-template__item" onClick={onClick && onClick }>
                <div className="flex-template__item__img">
                    <LazyLoadImage effect="blur" src={info[0].img} alt="sneakersy"/>
                </div>
                <h5 className="flex-template__item__heading">{name}</h5>
                <p className="flex-template__item__model">{model}</p>
                <div className="flex-template__item__info">
                    <p className="flex-template__item__discount">{discount > 0 ? `${beforeDiscount.toFixed(2)}zł` :""}</p>
                    <p className="flex-template__item__price">{price.toFixed(2)}zł</p>
                </div>
            </Link>
        </>
     );
}

Product.propTypes = {
    product: PropTypes.shape({
        price: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
        info: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func
};

export default Product;