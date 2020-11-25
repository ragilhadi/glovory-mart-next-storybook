import React from "react";
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";

const FieldContainer = styled("div")`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  position: relative;
`;

const FieldInput = styled("input")`
  display: inline-block;
  padding: 16px 48px;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 8px;
  background-color: #F8F9FD;
  outline: none;
  min-width: ${props => {
      switch (props.size) {
          case 'md':
              return "240px";
          case 'lg':
              return "480px";
      }
  }};
  height: 48px;

  &::placeholder {
    color: rgba(20, 48, 69, 0.5);
  }

  &:active,
  &:focus {
    border-color: #3598db;
    color: #143045;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #d8d8d8;
    background-color: #fbfbfb;

    &::placeholder {
      color: #d8d8d8;
    }
  }
`;

export interface SearchProps {
    size: "md" | "lg";
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    clearValue?: boolean;
    handleChange?: Function;
    handleClear?: Function;
};

const Search: React.FC<SearchProps> = ({
    disabled,
    placeholder,
    handleChange,
    handleClear,
    clearValue,
    value,
    ...rest
}) => {
  return (
    <FieldContainer>
      <SearchIcon
        style={{  position: "absolute", left: "16px" }}
      />
      {value  && clearValue ? (
        <CancelIcon
          onClick={() => handleClear}
          style={{
            color: "#D8D8D8",
            position: "absolute",
            right: "16px",
            cursor: "pointer",
          }}
        />
      ) : null}
      <FieldInput
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />
    </FieldContainer>
  )
}

Search.defaultProps = {
    disabled: false,
    placeholder: "Search",
    size: 'lg',
    clearValue: false,
    value: "",
}

export default Search;
