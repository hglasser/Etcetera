import React from 'react';
import Product from './Product'


let ProductGrid = props => {
    return (
    <div>
        {props.products.map(product => {
            console.log(product);
            return <Product {...product} key={product.id}/> })}
    </div>)
}

export default ProductGrid;