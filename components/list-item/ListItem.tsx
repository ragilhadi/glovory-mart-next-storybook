import styled from 'styled-components';
import React, { useState } from "react";
import ButtonICon from '../button-icon/ButtonIcon'
import Add from "@material-ui/icons/Add"
import Remove from "@material-ui/icons/Remove"
import Delete from "@material-ui/icons/Delete"

const ListItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 32px 16px;
    border-bottom: 1.5px solid #ddd;
`

const ImageContainer = styled.img`
    width: 100px;
    object-fit: contain;
`

const WrapperDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const WrapperPrice = styled.div`
    display: flex;
    flex-direction: column;
`
const WrapperQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TextDescription = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
`

const TextPrice = styled.h4`
    font-size: 1rem;
`


export interface ListItemProps {
    url?: any;
    name?: String;
    price?: any;
    id?:any;
    quantity?: any;
    onDeleteProduct?: any;
    onAddRemove?: any;
    cart?: any;
}

const ListItem: React.FC<ListItemProps> = ({
    children,
    url,
    id,
    name,
    price,
    cart,
    quantity,
    onDeleteProduct,
    onAddRemove,
}) => {
    const [productCart, setProductCart] = useState({
        name: name,
        price: price,
        url: url,
        id: id,
        quantity: quantity
    })

    const addQuantity = () => {
      onAddRemove("add", cart, productCart)
    }

    const removeQuantity = () => {
        onAddRemove("remove", cart, productCart)
    }

    const deleteCartProduct = () => {
        onDeleteProduct(id)
    }

    return (
        <ListItemContainer>
            <ImageContainer 
                src={url} 
                alt="chitato product" 
            />
            <WrapperDescription>
                <TextDescription>
                    {name}
                </TextDescription>
                <WrapperQuantity>
                 <ButtonICon
                    handleClick={addQuantity}
                    variant="secondary"
                    icon={<Add />}
                 />
                 <p>{quantity}</p>
                 <ButtonICon
                    handleClick={removeQuantity}
                    variant="secondary"
                    icon={<Remove />}
                 />

                </WrapperQuantity>
            </WrapperDescription>
            <WrapperPrice>
                <Delete onClick={() => deleteCartProduct}/>
                <TextPrice>
                    {`Rp.${price}`}
                </TextPrice>
            </WrapperPrice>
        </ListItemContainer>
    )
}

export default ListItem;