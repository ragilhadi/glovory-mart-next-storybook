import { Children } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const NaviWrapperContainer = styled.div`
    display: flex;
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