
import styled from 'styled-components';

export const Grid = styled.div`
  border-color: ${(props) => props.color};
`;

export const Row = styled.div`
  display: flex;
`;

const media = {
  xs: (styles) => `
    @media only screen and (max-wodth: 480px) {
      ${styles}
    }
  `,
}

export const Column = styled.div`
  display: flex;
`;