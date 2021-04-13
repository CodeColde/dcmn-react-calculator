import React from "react";
import styled from "styled-components";

function KeyWrapper ({ children, ...props }) {
  const childrens = React.Children
    .toArray(children)
    .map(el => (
      React.cloneElement(
        el,
        {...props, ...el.props}
      )
    ));
  return (
    <Grid length={childrens.length}>
      {childrens}
    </Grid>
  )
}

export default KeyWrapper;

const Grid = styled.article`
  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length % 4 === 0 ? length/4 : 1}, 150px)`};

  @media screen and (max-width: 610px) {
    grid-template-columns: ${({ length }) => `repeat(${length % 4 === 0 ? length/4 : 1}, 80px)`};
  }
`;