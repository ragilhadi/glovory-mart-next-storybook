import { storiesOf } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";
import Cardmembership from "@material-ui/icons/CardMembership"


storiesOf("Icon Button", module).add("Icon", () => {
  return <ButtonIcon icon={<Cardmembership color="primary"/>}/>;
});

storiesOf("Icon Button", module).add("Badge", () => {
  return (
  <ButtonIcon 
    icon={<Cardmembership color="primary" />}
    badge={true}
    text="20"
  />
  )
});

