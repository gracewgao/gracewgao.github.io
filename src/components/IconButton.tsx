import React from "react";
import styled from "styled-components";

interface IIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link: string;
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0;

  svg {
    height: 24px;
    width: 24px;
  }
`;

export default function IconButton(props: IIconButton) {
  return (
    <Button
      onClick={() => {
        window.location.href = props.link;
      }}
    >
      {props.children}
    </Button>
  );
}
