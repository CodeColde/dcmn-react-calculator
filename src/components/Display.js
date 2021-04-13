import styled from "styled-components";
import DisplayFormatter from "./DisplayFormatter";

const Display = ({ children }) => {
  return (
    <Wrapper>
      <DisplayFormatter>
        {parseFloat(children).toLocaleString('en-US', {
          useGrouping: true,
          maximumFractionDigits: 6
        })}
      </DisplayFormatter>
    </Wrapper>
  )
}

export default Display;

const Wrapper = styled.div`
  height: 320px;
  background: transparent;
  border-bottom: 1px solid white;
  position: relative;

  @media screen and (max-width: 610px) {
    height: 160px;
  }
`;