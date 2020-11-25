import styled from 'styled-components';
import React from "react";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 5%;
    background-color: #222b45;
    color: white;
`

export interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({
    children
}) => {
    return (
        <FooterContainer>{children}</FooterContainer>
    )
}

export default Footer;