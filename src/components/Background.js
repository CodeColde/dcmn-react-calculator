import styled from 'styled-components';

import BackgroundImg from "../assets/pexels-photo-192136.jpeg";

function Background ({ children }) {
  return (
    <Wrapper>
      {children}
      <Filter />
    </Wrapper>
  )
}

export default Background;

const Wrapper = styled.section`
  margin: 0 auto;
  background-image: url(${BackgroundImg});
  background-size: cover;
  position: relative;
  box-shadow: -3px 1px 16px 4px rgba(0, 0, 0, 0.2);
`;

const Filter = styled.div`
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  mix-blend-mode: darken;
  background-color: #0f1b55;
  opacity: 0.75;
  position: absolute;
`;