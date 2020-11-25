import React, { useState }  from 'react'
import { storiesOf } from '@storybook/react'
import Navbar from './Navbar'
import NavigationWrapper from './NavigationWrapper'
import Search from '../search/Search'
import styled from 'styled-components';
import { css } from 'styled-components';
import ButtonIcon from '../button-icon/ButtonIcon'
import ShoppingCart from "@material-ui/icons/ShoppingCart"
import AccountCircle from "@material-ui/icons/AccountCircle"

const ImageWrapper = styled.img`
    height: 30px;
    object-fit: contain;
    margin-right: 3rem;
`



storiesOf("Navbar", module).add("Navbar", () => {
    const [search, setSearch] = useState("");

    return (
        <Navbar>
            <NavigationWrapper>
                <ImageWrapper 
                    src="https://i.ibb.co/23Mc865/glovory.png" 
                    alt="Glovory"
                />
                <Search 
                    size="lg"
                    clearValue
                    value={search}
                    handleChange={(e) => setSearch(e.target.value)}
                    handleClear={() => setSearch("")}
                />
            </NavigationWrapper>
            <NavigationWrapper>
                <ButtonIcon
                    icon={<ShoppingCart />}
                    badge={true}
                    text="10"
                />
                <ButtonIcon
                    icon={<AccountCircle />}
                />
            </NavigationWrapper>
        </Navbar>
    )
})