import React, { useState }  from 'react'
import { storiesOf } from '@storybook/react'
import Navbar from './Navbar'
import NavigationWrapper from './NavigationWrapper'
import Search from '../search/Search'
import IconButton from '../button-icon/ButtonIcon'
import styled from 'styled-components';
import { RiAccountCircleLine, RiShoppingBag3Fill} from 'react-icons/ri'
import ButtonIcon from '../button-icon/ButtonIcon'

storiesOf("Navbar", module).add("Navbar", () => {
    const [search, setSearch] = useState("");

    return (
        <Navbar>
            <NavigationWrapper>
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
                    icon={<RiShoppingBag3Fill style={{color: "black"}}/>}
                    badge={true}
                    text="10"
                />
                <ButtonIcon
                    icon={<RiAccountCircleLine />}
                />
            </NavigationWrapper>
        </Navbar>
    )
})