import React from "react";
import Receipt from "./components/Receipt";
import styled from "styled-components";
import Grain from "./images/grain.png";

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Multiply = styled.div`
  height: 100%;
  width: 100%;
  opacity: 50%;
  background-size: cover;
  position: absolute;
  background-blend-mode: multiply;
  background-image: url(${Grain});
`;

const Body = styled.div`
  height: 100%;
  width: 100%;
  background-color: #d8d1ca;
  position: absolute;
`;

const Outer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <>
      <Outer>
        <Body />
        <Multiply />
      </Outer>
      <BodyContainer>
        <Receipt />
      </BodyContainer>
    </>
  );
}

export default App;
