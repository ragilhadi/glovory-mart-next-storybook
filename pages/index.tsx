import ButtonIcon from "@components/button-icon/ButtonIcon";
import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";
import NavigationWrapper from "@components/navbar/NavigationWrapper";
import Search from "@components/search/Search";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import React, { useState }  from 'react'
import ButtonStyle from '../components/button/Button'

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <>
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
                    icon={<ShoppingCart />}
                    badge={true}
                    text="10"
                />
                <ButtonIcon
                    icon={<AccountCircle />}
                />
            </NavigationWrapper>
    </Navbar>
    <h1>Welcome to My Next App!</h1>
    <ButtonStyle variant="primary"> Button </ButtonStyle>
    <Footer>
            <p>© GlovoryMart - All rights reserved.</p>
            <p css={`margin-top: 1rem;`}>by Ragil Prasetyo</p>
    </Footer>
    </>
  );
};

export default Home;
