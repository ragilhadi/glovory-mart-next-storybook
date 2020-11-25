import styled from 'styled-components';
import React from "react";
import Close from "@material-ui/icons/Close"
import Button from '../button/Button';

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TextHeader = styled.h3`
    font-size: 1.5rem;
    margin-left: 1rem;
`

export interface DrawerHeaderProps {
    header?: String;
    option?: boolean;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
    header,
    option
}) => {
    return (
    <>
        <HeaderWrapper>
            <Close />
            <TextHeader>{header}</TextHeader>
        </HeaderWrapper>
        {option ? <Button variant="ghost" size="small">Clear All</Button>: null}
    </>
    )
}

DrawerHeader.defaultProps = {
    header: "Header Text",
    option: false,
  }

export default DrawerHeader;