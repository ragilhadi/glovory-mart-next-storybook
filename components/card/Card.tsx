import styled from 'styled-components';
import React from "react";
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
    width: 250px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translate(0px, -5px);
        box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.2);
    }
`

const Image = styled.img`
    width: 180px;
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
    price?: String
}

const Card: React.FC<CardProps> = ({
    children,
    url,
    description,
    price
}) => {
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
            <Button variant="primary" size="full">Add to Cart</Button>
        </CardContainer>
    )
}

Card.defaultProps = {
    description: "Qtela Tempe Cabai Rawit 55g",
    price: "7000",
    url: "https://i.ibb.co/Wfsp74f/1.png"
  }

export default Card;