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
  transition: all 0.3s ease-in-out;
  border: none;
  color: black;
  border: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return "1.5px solid #F8F9FD";
      case 'secondary':
        return "1.5px solid #DAE1FF";
    }
    }};
  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return "#F8F9FD";
      case 'secondary':
        return "#fff";
    }
    }};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return "#EFF2FF";
      case 'secondary':
        return "#D53B2F";
    }
    }};
    /* background-color: #EFF2FF; */
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
  variant?: 'primary' | 'secondary';
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
  variant: "primary",
  text: "",
}

export default ButtonIcon;
