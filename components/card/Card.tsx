import styled from 'styled-components';
import React, { useState } from "react";
import Button from '../button/Button'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    padding: 16px;
    background-color: white;
    color: black;
    min-height: 400px;
    width: 300px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translate(0px, -5px);
        box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.2);
    }
`

const Image = styled.img`
    width: 180px;
    height: 240px;
    object-fit: contain;
    margin-bottom: 1.5rem;
`

const DescriptionText = styled.h4`
    font-size: 1.15rem;
    align-self: flex-start;
    margin-bottom: 1rem;
`

const PriceText = styled.p`
    font-size: 1.25rem;
    color: #DB574D;
    font-weight: bold;
    align-self: flex-start;
    margin-bottom: 1.25rem;
`

export interface CardProps {
    url?: String;
    description?: String;
    price?: String;
    cart?: any;
    id?: any;
    product?: any;
    handleCart?: any;
    addCart?: any;
    productCarts?: any;
}

const Card: React.FC<CardProps> = ({
    children,
    url,
    description,
    price,
    id,
    addCart,
    productCarts,
}) => {
    const [productCart, setProductCart] = useState({
        name: description,
        price: price,
        url: url,
        id: id,
        quantity: 1
    })

    const addToCart = () => {
        console.log(productCarts)
        addCart(productCarts, productCart)
    }
    return (
        <CardContainer>
            <Image 
                src={url}
                alt="Chitato Products"
            />
            <DescriptionText>
                {description}
            </DescriptionText>
            <PriceText>
               {`Rp. ${price}`}
            </PriceText>
            <Button 
                variant="primary" 
                size="full" 
                handleClick={addToCart}
                // handleClick={addItemToCart(cart, product )}
            >
                Add to Cart
            </Button>
        </CardContainer>
    )
}

Card.defaultProps = {
    description: "Qtela Tempe Cabai Rawit 55g",
    price: "7000",
    url: "https://i.ibb.co/Wfsp74f/1.png"
  }

export default Card;