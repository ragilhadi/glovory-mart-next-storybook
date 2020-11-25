import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import ButtonIcon from '../button-icon/ButtonIcon'
import Drawer from "./Drawer";


storiesOf("Drawer", module).add("Drawer", () => {
    return (
      <Drawer isOpen={true} />
    );
  });