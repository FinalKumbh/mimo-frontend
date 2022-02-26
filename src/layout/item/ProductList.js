import React from 'react';
import ProductItem from './ProductItem';


const ProductList = (props) => {
    return (
        <div>
            {props.products.map(product => (
                <ProductItem key={product.id}  product={product} />
            ))}
        </div>
    );
};

export default ProductList;