import styled from "styled-components";

function Key ({ children, onClick, span, bg, selected }) {
  return (
    <Button
      onClick={() => onClick(children)}
      selected={selected ? 1 : 0}
      span={span ? 1 : 0}
      bg={bg ? 1 : 0}
    >
      {children}
    </Button>
  )
}

export default Key;

const Button = styled.button`
  height: ${({span}) => span ? "300px" : "150px"};
  background-color: ${({ bg, selected }) => bg
    ? selected
      ? "rgba(9, 128, 61, 0.75)"
      : "rgba(65, 181, 114, 0.75)"
    : selected
      ? "rgba(10, 48, 26, 0.75)"
      : "rgba(3, 19, 10, 0.75)"
  };
  color: white;
  font-size: 2em;
  outline: none;
  border: none;

  &:hover {
    background-color: #075c2c;
    cursor: pointer;
  }

  @media screen and (max-width: 610px) {
    height: ${({span}) => span ? "160px" : "80px"};
  }
`;