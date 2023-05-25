import React from "react";
import styled from "styled-components";

interface ISpacer {
  width?: number;
  height?: number;
}

const Space = styled.div<ISpacer>`
  height: ${(props: ISpacer) => props.height ?? 16}px;
  width: ${(props: ISpacer) => props.width ?? 16}px;
`;

export default function Spacer(props: ISpacer) {
  return <Space width={props.width} height={props.height}/>;
}
