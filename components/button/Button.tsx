import React from "react";
import styled from 'styled-components';

const ButtonContainer = styled.button`
  box-sizing: border-box;
  min-width: ${(props) => {
    switch (props.size) {
      case 'small':
        return "80px";
      case 'medium':
        return "180px";
      case 'full':
        return "100%"
    }
  }};
  padding: 12px 16px;
  border-radius: 10px;
  outline: none;
  transition: all 0.2s ease-in-out;
  border: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return '1.5px solid #D53B2F';
      case 'secondary':
        return "1.5px solid #D53B2F";
      case 'ghost':
        return "black"
    }
  }};
  font-size: 1rem;
  color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return "#fff";
      case 'secondary':
        return "#D53B2F";
      case 'ghost':
        return "#D53B2F"
    }
  }};
  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return "#D53B2F";
      case 'secondary':
        return "#fff";
      case 'ghost':
        return "transparent"
    }
  }};

  &:hover {
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
  }

`

export interface ButtonProps {
  text?: string;
  disable?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "full"
};

const Button: React.FC<ButtonProps> = ({
  children,
  disable,
  ...rest
}) => {
  return (
    <ButtonContainer variant disabled={disable} {...rest}>{children}</ButtonContainer>
  )
}

Button.defaultProps = {
  variant: "primary",
  disable: false,
  size: "medium"
}

export default Button;
