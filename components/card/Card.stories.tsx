import { storiesOf } from "@storybook/react";
import Card from "./Card";
import styled from 'styled-components';
import Button from "../button/Button";



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

storiesOf("Card", module).add("Card", () => {
    return (
        <Card>
            <Image 
                src="https://i.ibb.co/Wfsp74f/1.png"
                alt="Chitato Products"
            />
            <DescriptionText>
                Qtela Tempe Cabai Rawit 55g
            </DescriptionText>
            <PriceText>
                Rp.7000
            </PriceText>
            <Button variant="primary" size="full">Add to Cart</Button>
        </Card>
    )
})