import styled from 'styled-components';
import React from "react";
import Navbar from './Navbar';

const NaviWrapperContainer = styled.div`
    display: flex;
    color: black;
`


export interface NavigationWrapperProps {

}

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({
    children
}) => {
    return (
    <NaviWrapperContainer>{children}</NaviWrapperContainer>
    )
}

export default NavigationWrapper