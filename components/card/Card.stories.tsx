import { storiesOf } from "@storybook/react";
import Card from "./Card";

storiesOf("Card", module).add("Card", () => {
    return (
        <Card>
            <h1>Card</h1>
        </Card>
    )
})