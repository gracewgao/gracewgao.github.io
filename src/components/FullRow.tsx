import React from "react";
import styled from "styled-components";
import { Highlight, HighlightRow } from "./ItemRow";
import { ALWAYS_HIGHLIGHT, NO_HIGHLIGHT } from "../const/ReceiptData";

interface IFullRow extends React.HTMLAttributes<HTMLDivElement> {
  left?: boolean;
  item: string;
}

const TextWrapper = styled(HighlightRow)<IFullRow>`
  width: 100%;
  text-align: ${(props) => (props.left ? "left" : "center")};
`;

export default function FullRow(props: IFullRow) {
  const isHighlight = !NO_HIGHLIGHT.has(props.item);
  const isPermanent = ALWAYS_HIGHLIGHT.has(props.item);

  return (
    <TextWrapper {...props}>
      <Highlight permanent={isPermanent}>
        {props.children}
      </Highlight>
    </TextWrapper>
  );
}
