import styled from "styled-components";
import Paper from "../images/paper.png";
import ScrollingText from "./ScrollingText";
import HeaderLogo from "../images/header.svg";
import Spacer from "./Spacer";
import { RECEIPT_HEIGHT } from "../const/ReceiptData";

const ReceiptBg = styled.div`
  color: #333333;
  width: 360px;
  height: ${RECEIPT_HEIGHT + 160}px;
  margin: auto;
  background-image: url(${Paper});
  background-size: cover;
  position: absolute;
  bottom: -${RECEIPT_HEIGHT}px;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 0.2);
  font-family: "Courier Prime", monospace;
  padding: 16px;
  left: 50%;
  transform: translate(-50%, 0%);
  text-transform: uppercase;

  a {
    color: #333333;
  }
`;

const Header = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto;
`;

export default function Receipt() {
  return (
    <ReceiptBg>
      <Spacer height={16} />
      <Header src={HeaderLogo} />
      <Spacer height={16} />
      <ScrollingText />
    </ReceiptBg>
  );
}
