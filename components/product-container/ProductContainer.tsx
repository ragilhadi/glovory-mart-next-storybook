import Card from '../card/Card'
import React from "react";
import styled from 'styled-components';

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    box-sizing: border-box;
`



export interface NavbarProps {
    products?: any;
    cart?: any;
    handleCart?: any;
    onAdd?: any;
}

const ProductContainer: React.FC<NavbarProps> =({
    children,
    products,
    cart,
    handleCart,
    onAdd,
}) => {
    return (
    <ProductWrapper>
        {products.map(product => (
            <Card 
                key={product.id} 
                id={product.id}
                url={product.imageUrl} 
                description={product.name} 
                price={product.price}  
                addCart={onAdd}
            />
        ))}
    </ProductWrapper>
    )
}

export default ProductContainer;