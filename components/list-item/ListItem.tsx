import styled from 'styled-components';
import React from "react";
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

}

const ListItem: React.FC<ListItemProps> = ({
    children
}) => {
    return (
        <ListItemContainer>
            <ImageContainer 
                src="https://i.ibb.co/Wfsp74f/1.png" 
                alt="chitato product" 
            />
            <WrapperDescription>
                <TextDescription>
                    FRISIAN FLAG UHT Purefarm Cokelat 225 ml
                </TextDescription>
                <WrapperQuantity>
                 <ButtonICon
                    variant="secondary"
                    icon={<Add />}
                 />
                 <p>10</p>
                 <ButtonICon
                    variant="secondary"
                    icon={<Remove />}
                 />

                </WrapperQuantity>
            </WrapperDescription>
            <WrapperPrice>
                <Delete />
                <TextPrice>
                    Rp.7000
                </TextPrice>
            </WrapperPrice>
        </ListItemContainer>
    )
}

export default ListItem;