import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 480px;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 10px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
