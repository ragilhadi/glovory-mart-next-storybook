import React from 'react'
import styled from 'styled-components';

const FullContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F6F8;
`

const ImageContainer = styled.img`
    object-fit: contain;
`

const succes = () => {
    return (
        <FullContainer>
            <ImageContainer src="https://i.ibb.co/23Mc865/glovory.png" alt="Glovory" />
        </FullContainer>
    )
}

export default succes
