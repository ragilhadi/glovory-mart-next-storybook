import { storiesOf } from "@storybook/react";
import Card from "./Card";
import styled from 'styled-components';
import Button from "../button/Button";




storiesOf("Card", module).add("Card", () => {
    return (
        <Card />
    )
})