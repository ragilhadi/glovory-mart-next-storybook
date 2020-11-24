import React from "react";
import styled from 'styled-components';

const ButtonIconContainer = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 16px;
  border-radius: 10px;
  outline: none;
  transition: all 0.2s ease-in-out;
  border: none;
  color: white;
  background-color: #F8F9FD;

  /* &:hover {
    cursor: pointer;
    background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return "#DB574D";
      case 'secondary':
        return "#EE7C73";
      case 'ghost':
        return "#EE7C73"
      }
     }};

    color: ${(props) => {
      switch (props.variant) {
        case 'primary':
          return "#fff";
        case 'secondary':
          return "white";
        case 'ghost':
          return "white"
      }
    }};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  } */

`

export interface ButtonIconProps {
  text?: string;
  disable?: boolean;
  icon?: React.ReactElement;

};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  children,
  disable,
  icon,
  ...rest
}) => {
  return (
    <ButtonIconContainer variant disabled={disable} {...rest}>{icon}</ButtonIconContainer>
  )
}

ButtonIcon.defaultProps = {
  disable: false,
}

export default ButtonIcon;
