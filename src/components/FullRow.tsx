import React from "react";
import styled from "styled-components";

interface IFullRow extends React.HTMLAttributes<HTMLDivElement>{
  left?: boolean;
}

const TextWrapper = styled.div<IFullRow>`
  width: 100%;
  text-align: ${(props) => (props.left ? "left" : "center")};
`;

export default function FullRow(props: IFullRow) {
  return (
    <TextWrapper left={props.left}>
      {props.children}
    </TextWrapper>
  );
}
