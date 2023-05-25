import React from "react";
import styled from "styled-components";
import { NO_HIGHLIGHT } from "../const/ReceiptData";

interface IItemRow {
  item: string;
  detail?: string;
  date?: string;
  done?: boolean;
}

const Row = styled.div`
  display: flex;
  width: 100%;

  span:hover {
    background-position: -99.99% 0;
  }
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

const Highlight = styled.span<{ enabled?: boolean }>`
  ${(props) =>
    props.enabled
      ? `
      background: linear-gradient(to right, transparent 50%, #f4ffb2 50%);
      background-size: 200% 100%;
      background-position: -0% 0;
      transition: background-position 0.5s ease-out;
      `
      : ""}
`;

export default function ItemRow(props: IItemRow) {
  const isHighlight = !NO_HIGHLIGHT.has(props.item);

  return (
    <Row>
      <Item>
        <Highlight enabled={isHighlight}>{props.item ?? ""}</Highlight>
      </Item>
      <Detail>
        <Highlight enabled={isHighlight}>{props.detail ?? ""}</Highlight>
      </Detail>
      <Date>{props.date ?? ""}</Date>
    </Row>
  );
}
