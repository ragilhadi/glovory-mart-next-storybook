import Footer from './Footer'
import { css } from 'styled-components';
import { storiesOf } from "@storybook/react";

storiesOf("Footer", module).add("Footer", () => {
    return (
        <Footer>
            <p>© GlovoryMart - All rights reserved.</p>
            <p css={`margin-top: 1rem`}>by Ragil Prasetyo</p>
        </Footer>
    )
})
