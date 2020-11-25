import ButtonIcon from "@components/button-icon/ButtonIcon";
import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";
import NavigationWrapper from "@components/navbar/NavigationWrapper";
import Search from "@components/search/Search";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import React, { useState }  from 'react'
import styled from 'styled-components';
import ButtonStyle from '../components/button/Button'

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <>
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
    <BodyContainer>
        <h1>Welcome to My Next App!</h1>
        <ButtonStyle variant="primary"> Button </ButtonStyle>
    </BodyContainer>
    <Footer>
            <p>© GlovoryMart - All rights reserved.</p>
            <p css={`margin-top: 1rem;`}>by Ragil Prasetyo</p>
    </Footer>
    </>
  );
};


const ImageWrapper = styled.img`
    height: 30px;
    object-fit: contain;
    margin-right: 3rem;
`

const BodyContainer = styled.main`
    padding: 0 5%;
    min-height: calc(100vh - 80px - 100px);
`

export default Home;
