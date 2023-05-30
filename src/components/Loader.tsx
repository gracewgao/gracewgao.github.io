import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import Spacer from "./Spacer";

const LoaderBg = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #333333;
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const LogoWrapper = styled.img`
  width: 84px;
  display: block;
`;

const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`

export default function Loader() {
  return (
    <LoaderBg>
      <LogoWrapper src={Logo} />
      <Spacer height={32}/>
      <Dots>printing</Dots>
    </LoaderBg>
  );
}
