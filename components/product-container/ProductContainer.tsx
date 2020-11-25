import Card from '../card/Card'
import React from "react";
import styled from 'styled-components';

const ProductWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 0;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`



export interface NavbarProps {
    products?: any;
}

const ProductContainer: React.FC<NavbarProps> =({
    children,
    products,
}) => {
    return (
    <ProductWrapper>
        {products.map(product => (
            <Card key={product.id} url={product.url} description={product.name} price={product.price}  />
        ))}
    </ProductWrapper>
    )
}

export default ProductContainer;