import React from "react";
import styled from "styled-components";
import { ALWAYS_HIGHLIGHT, NO_HIGHLIGHT } from "../const/ReceiptData";

interface IItemRow {
  item: string;
  detail?: string;
  date?: string;
  done?: boolean;
}

export const HighlightRow = styled.div`
  span:hover {
    background-position: -99.99% 0;
  }
`;

const Row = styled(HighlightRow)`
  display: flex;
  width: 100%;
`;

const Item = styled.div`
  flex: 2;
`;
const Detail = styled.div`
  flex: 4;
`;
const Date = styled.div`
  flex: 1;
  text-align: right;
`;

export const Highlight = styled.span<{
  enabled?: boolean;
  permanent?: boolean;
}>`
  ${(props) =>
    `
      background: linear-gradient(to right, transparent 50%, ${
        (props.permanent || props.enabled) ? "#f4ffb2" : "none"
      } 50%);
      background-size: 200% 100%;
      background-position: ${props.permanent ? "-99.99% 0" : "-0% 0"};
      transition: background-position 0.5s ease-out;
      `}
`;

export default function ItemRow(props: IItemRow) {
  const isHighlight = !NO_HIGHLIGHT.has(props.item);
  const isPermanent = ALWAYS_HIGHLIGHT.has(props.item);

  return (
    <Row>
      <Item>
        <Highlight enabled={isHighlight} permanent={isPermanent}>
          {props.item ?? ""}
        </Highlight>
      </Item>
      <Detail>
        <Highlight enabled={isHighlight} permanent={isPermanent}>
          {props.detail ?? ""}
        </Highlight>
      </Detail>
      <Date>{props.date ?? ""}</Date>
    </Row>
  );
}
