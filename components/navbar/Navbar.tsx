import React from "react";
import styled from 'styled-components';

const NavigationContainer = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
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

}

const Navbar: React.FC<NavbarProps> =({
    children
}) => {
    return (
    <NavigationContainer>{children}</NavigationContainer>
    )
}

export default Navbar;