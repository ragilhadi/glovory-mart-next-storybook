import { storiesOf } from "@storybook/react";
import Button from "./Button";


storiesOf("Button", module).add("Primary", () => {
  return <Button variant="primary">Primary</Button>;
});

storiesOf("Button", module).add("Secondary", () => {
  return <Button variant="secondary">Secondary</Button>;
});

storiesOf("Button", module).add("Ghost", () => {
  return <Button variant="ghost">Ghost</Button>;
});

storiesOf("Button", module).add("Disable", () => {
  return <Button  disable={true} >Disable</Button>;
});
