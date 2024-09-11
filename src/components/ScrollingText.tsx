import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemRow from "./ItemRow";
import FullRow from "./FullRow";
import Spacer from "./Spacer";
import Barcode from "../images/barcode.png";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import IconButton from "./IconButton";
import { LINES, RECEIPT_HEIGHT } from "../const/ReceiptData";

const BarcodeImage = styled.div`
  background-image: url(${Barcode});
  background-blend-mode: multiply;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 60px;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ScrollingText() {
  const [curTexts, setCurTexts] = useState<string[][]>([]);
  const [showFooter, setShowFooter] = useState(false);

  let last = 0;
  let ticking = false;

  LINES[3].text = [
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  ];

  var len = 0;
  for (var row of LINES) {
    for (var entry of row.text) {
      len += entry.length;
    }
  }

  function updateText(displayedLength: number) {
    var curLen = 0;
    var cur = [];

    for (let i = 0; i < LINES.length; ++i) {
      var done = false;
      const row = LINES[i].text;
      const curRow = [];
      for (let j = 0; j < row.length; ++j) {
        var word = row[j];
        const rem = displayedLength - curLen;
        if (rem <= word.length) {
          word = word.substring(0, rem);
          done = true;
        }
        curLen += word.length;
        curRow.push(word);
        if (done) {
          break;
        }
      }
      cur.push(curRow);
      if (done) {
        break;
      }
    }
    setCurTexts(cur);
    setShowFooter(displayedLength === len);
  }

  useEffect(() => {
    const handleScroll = (event: Event) => {
      last = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateText((last / RECEIPT_HEIGHT) * len);
          ticking = false;
        });

        ticking = true;
      }
      event.stopPropagation();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {LINES.map((row, i) => {
        if (i > curTexts.length - 1) {
          return;
        }
        const curRow = curTexts[i];
        switch (row.text.length) {
          case 1:
            return (
              <>
                <FullRow item={curRow[0]} left={row.isLeft ?? false}>{curRow[0]}</FullRow>
                <Spacer height={row.spacing ?? 0} />
              </>
            );
          case 3:
            return (
              <>
                <ItemRow
                  item={curRow[0]}
                  detail={curRow.length > 1 ? curRow[1] : ""}
                  date={curRow.length > 2 ? curRow[2] : ""}
                />
                <Spacer height={row.spacing ?? 0} />
              </>
            );
          default:
            return <Spacer height={row.spacing ?? 0} />;
        }
      })}
      {showFooter ? (
        <>
          <FullRow item="see resume">
            <a href="mailto:grace.gao2@uwaterloo.ca">get in touch</a>
          </FullRow>
          <Spacer height={24} />
          <BarcodeImage />
          <Spacer height={8} />
          <FullRow item="gracewgao.me">gracewgao.me</FullRow>
          <Spacer height={16} />
          <IconRow>
            <IconButton link="https://www.linkedin.com/in/gracewgao/">
              <AiFillLinkedin />
            </IconButton>
            <Spacer width={8} />
            <IconButton link="https://github.com/gracewgao">
              <AiFillGithub />
            </IconButton>
            <Spacer width={8} />
            <IconButton link="mailto:grace.gao2@uwaterloo.ca">
              <MdEmail />
            </IconButton>
          </IconRow>
          <Spacer height={16} />
        </>
      ) : null}
    </div>
  );
}
