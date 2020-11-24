import React from "react";
import styled from 'styled-components';

const ButtonContainer = styled.button`
  min-width: 180px;
  background-color: blue;
`

type Props = {
  text: string;
};

export default ({ text }: Props) => <ButtonContainer>{text}</ButtonContainer>;
