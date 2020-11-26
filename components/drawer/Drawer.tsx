import React from "react";
import styled from 'styled-components';
import Close from "@material-ui/icons/Close"
import Button from '../button/Button';
import ListItem from "../list-item/ListItem";

const DrawerContainer = styled.div`
  position: fixed;
  z-index: 11;
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
  padding: 0 16px;
  flex-direction: column;
  width: 500px;
  min-height: 100vh;
  background-color: white;
  box-shadow: -5px 0 10px 0 rgba(0, 0, 0, 0.1);
`

const DrawerHeaderWrapper = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    align-items: center;
    height: 70px;
    border-bottom: 2px solid #ddd;
`

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.15);
  }
`

const CloseIcon = styled(Close)`
  &:hover {
    cursor: pointer;
    background-color: #EFF2FF;
  }
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  align-self: flex-end;
  width: calc(100% - 32px);
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
  productCart?: any;
  resetCart?: Function;
  onAddRemove?: any;
  onDeleteProduct?: any;
};

const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  handleClose,
  header,
  option,
  productCart,
  resetCart,
  onAddRemove,
  onDeleteProduct,
  ...rest
}) => {
    
  var total = 0;

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
                          {option ? <Button variant="ghost" size="small" handleClick={resetCart}>Clear All</Button>: null}
                        </DrawerHeaderWrapper>
                        <ProductWrapper>
                          {productCart.map((product) => (
                            <ListItem  
                              key={product.id} 
                              id={product.id}
                              price={product.price} 
                              name={product.name}
                              url={product.url}
                              cart={productCart}
                              quantity={product.quantity}
                              onAddRemove={onAddRemove}
                              onDeleteProduct={onDeleteProduct}
                            />
                          ))}
                        </ProductWrapper>
                        <ButtonContainer>
                          {productCart.map((data) => (
                            total = total + (data.price * data.quantity)
                          ))}
                          <Button size="full">{`Purchase Order: Rp.${total}`}</Button>
                        </ButtonContainer>
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
