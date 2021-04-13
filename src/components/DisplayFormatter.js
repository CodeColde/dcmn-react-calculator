import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Format the display value text so that it fits within the parent's confines
const DisplayFormatter = ({ children }) => {
  const [scale, setScale] = useState(1);
  const displayRef = useRef(null)

  useEffect(() => {
    if (displayRef && displayRef.current) {
      const node = displayRef.current;
      const parentNode = node.parentNode;

      const availableWidth = parentNode.offsetWidth;
      const actualWidth = node.offsetWidth;
      const actualScale = availableWidth / actualWidth;

      if (scale !== actualScale) {
        if (actualScale < 1) {
          setScale(actualScale);
        }
        if (scale < 1) {
          setScale(1)
        }
      }
    }
  }, [scale, children]);

  return (
    <Wrapper
      ref={displayRef}
      scale={scale}
    >
      {children}
    </Wrapper>
  )
}

export default DisplayFormatter;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  color: white;
  font-size: 9em;
  bottom: 16px;
  padding: 0 32px;
  transform-origin: right;
  display: inline-block;
  ${({ scale }) => `transform: scale(${scale}, ${scale})`};

  @media screen and (max-width: 610px) {
    font-size: 6em;
  }
`;