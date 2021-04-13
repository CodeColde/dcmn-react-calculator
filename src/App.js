import styled from 'styled-components';

import Key from './components/Key';
import KeyWrapper from './components/KeyWrapper';
import Display from './components/Display';
import Background from './components/Background';

import useCalculate from './hooks/useCalculate';

function App() {
  const {
    displayValue,
    operator,
    awaitingOperator,
    inputDigit,
    inputDot,
    inputOperation,
    clearAll,
  } = useCalculate();

  return (
    <Background>
      <Wrapper>
        <Display>{displayValue}</Display>
        <FlexWrapper>
          <KeyWrapper onClick={inputDigit}>
            <Key>7</Key>
            <Key>8</Key>
            <Key>9</Key>
            <Key>4</Key>
            <Key>5</Key>
            <Key>6</Key>
            <Key>1</Key>
            <Key>2</Key>
            <Key>3</Key>
            <Key onClick={clearAll}>AC</Key>
            <Key onClick={() => inputDigit(0)}>0</Key>
            <Key onClick={inputDot}>.</Key>
          </KeyWrapper>
          <KeyWrapper onClick={inputOperation}>
            <Key selected={operator === "+" && awaitingOperator}>+</Key>
            <Key selected={operator === "-" && awaitingOperator}>-</Key>
            <Key span bg selected={operator === "=" && awaitingOperator}>=</Key>
          </KeyWrapper>
        </FlexWrapper>
      </Wrapper>
    </Background>
  );
}

export default App;

const FlexWrapper = styled.article`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: relative;
`;