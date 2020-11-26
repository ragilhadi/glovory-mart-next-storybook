import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import ButtonIcon from '../button-icon/ButtonIcon'
import Drawer from "./Drawer";
import Button from "../button/Button";


storiesOf("Drawer", module).add("Drawer", () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
    <>
        <Button 
            handleClick={() => setOpenDrawer(!openDrawer)}
        >
            Open
        </Button>
        <Drawer 
            isOpen={openDrawer} 
            handleClose={() => setOpenDrawer(!openDrawer)}
            header="Cart"
            option={true}
        />
    </>
    );
  });