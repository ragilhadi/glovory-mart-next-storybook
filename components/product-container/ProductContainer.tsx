import Card from '../card/Card'
import React from "react";
import styled from 'styled-components';

const NavigationContainer = styled.div`
    display: flex;
    height: 80px;
    box-sizing: border-box;
    padding: 0 5%;
    justify-content: space-between;
    background-color: white;
    box-shadow: 1px 0 20px 0 rgba(0, 0, 0, 0.2);
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
    <NavigationContainer>
        {products.map(product => (
            <Card key={product.id} />
        ))}
    </NavigationContainer>
    )
}

export default ProductContainer;