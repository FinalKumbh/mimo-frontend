import React from 'react';

const ProductItem = (props) => {
    return (
        <div>
            <h5>{props.product.title}</h5>
        </div>
    );
};

export default ProductItem;