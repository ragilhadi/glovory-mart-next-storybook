import React from "react";
import styled from 'styled-components';
import Close from "@material-ui/icons/Close"
import Button from '../button/Button';

const DrawerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`
const DrawerOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 55%;
`


const DrawerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
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

const CloseIcon = styled(Close)`
  &:hover {
    cursor: pointer;
    background-color: #EFF2FF;
  }

`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TextHeader = styled.h3`
    font-size: 1.25rem;
    margin-left: 1rem;
`


export interface DrawerProps {
  isOpen?: boolean;
  handleClose?: Function;
  header?: String;
  option?: boolean;
};

const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  handleClose,
  header,
  option,
  ...rest
}) => {
    return (
        <>
            {isOpen ? (
                <DrawerContainer>
                    <DrawerWrapper>
                        <DrawerHeaderWrapper>
                            <HeaderWrapper>
                            <CloseIcon onClick={handleClose}/>
                            <TextHeader>{header}</TextHeader>
                          </HeaderWrapper>
                          {option ? <Button variant="ghost" size="small">Clear All</Button>: null}
                        </DrawerHeaderWrapper>
                        <Button>Purchase Order : Rp.14000</Button>
                    </DrawerWrapper>
                    <DrawerOverlay onClick={handleClose}/>
                </DrawerContainer>
            ) : null}
        </>
    )
}

Drawer.defaultProps = {
  isOpen: false,
}

export default Drawer;
