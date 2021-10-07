import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  color: ${(props) => props.color};
  `;

const TestStyledComp = () => (
    <StyledComponent color="red">
      <p>HELLO, I AM HERE</p>
    </StyledComponent>
  );

  export default TestStyledComp;