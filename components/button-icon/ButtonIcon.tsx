import React from "react";
import styled from 'styled-components';

const ButtonIconContainer = styled.button`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 24px;
  border-radius: 10px;
  outline: none;
  transition: all 0.2s ease-in-out;
  border: none;
  color: black;
  background-color: #F8F9FD;

  &:hover {
    cursor: pointer;
  }

`

const Badge = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background-color: #DB574D;
  color: white;
  font-size: 0.6rem;
`

export interface ButtonIconProps {
  icon?: React.ReactElement;
  badge?: boolean;
  text?: String;

};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  children,
  badge,
  text,
  icon,
  ...rest
}) => {
  return (
    <ButtonIconContainer {...rest}>
      {icon}
      {badge && text ? (
        <Badge>{text}</Badge>
      ) : null
    }
      
      </ButtonIconContainer>
  )
}

ButtonIcon.defaultProps = {
  badge: false,
  text: "",
}

export default ButtonIcon;
