import ButtonIcon from "@components/button-icon/ButtonIcon";
import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";
import NavigationWrapper from "@components/navbar/NavigationWrapper";
import Search from "@components/search/Search";
import { ShoppingCart, AccountCircle } from "@material-ui/icons";
import React, { useState, useEffect }  from 'react'
import styled from 'styled-components';
import ProductContainer from '../components/product-container/ProductContainer'
import PRODUCT_DATA from '../data/Product'
import axios from 'axios';

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
              'https://my-json-server.typicode.com/ragilhadi/glovory-mart-next-storybook/product',
          )
          setData(result.data);
      }
      fetchData();
  }, [])

  const filterProduct = data.filter( data => 
    data.name.toLowerCase().includes(search.toLowerCase())
  )

  console.log(search)
  
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
        <ProductContainer products={filterProduct} />
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
    padding: 64px 5%;
    min-height: calc(100vh - 80px - 100px);
    background-color: #F5F6F8;
`


export default Home;
