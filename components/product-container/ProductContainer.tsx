import Card from '../card/Card'
import React from "react";
import styled from 'styled-components';

const ProductWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 0 5%;
    justify-content: flex-start;
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
            <Card key={product.id}  />
        ))}
    </ProductWrapper>
    )
}

export default ProductContainer;