import React, { useState } from "react";
import Receipt from "./components/Receipt";
import styled from "styled-components";
import Grain from "./images/grain.png";
import Loader from "./components/Loader";

const Global = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Courier Prime", monospace;
  text-transform: uppercase;
`;

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
  const [loaded, setLoaded] = useState(false);
  const [time, setTime] = useState(false);      
  
  setTimeout(() => {
    setTime(true);
  }, 1000);

  document.onreadystatechange = () => {
    setLoaded(document.readyState === "complete");
  };

  return (
    <Global>
      {loaded && time ? (
        <>
          <Outer>
            <Body />
            <Multiply />
          </Outer>
          <BodyContainer>
            <Receipt />
          </BodyContainer>
        </>
      ) : (
        <Loader />
      )}
    </Global>
  );
}

export default App;
