import React from "react";
import styled from 'styled-components';
import DrawerHeader from './DrawerHeader'

const DrawerContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: black;
  opacity: 55%;
`

const DrawerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 100vh;
  background-color: white;
  box-shadow: -5px 0 10px 0 rgba(0, 0, 0, 0.1);
`

const DrawerHeaderWrapper = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 2px solid #ddd;
`


export interface DrawerProps {
  isOpen?: boolean;
};

const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  ...rest
}) => {
  return (
    <>
        {isOpen ? (
            <DrawerContainer>
                <DrawerWrapper>
                    <DrawerHeaderWrapper>
                        <DrawerHeader header="Cart" option={true}/>
                    </DrawerHeaderWrapper>
                </DrawerWrapper>
            </DrawerContainer>
        ) : null}
    </>
  )
}

Drawer.defaultProps = {
  isOpen: false,
}

export default Drawer;
