import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  & div {
    margin-bottom: 10px;
  }

  & div button {
    width: 48%;
  }

  & button:first-child {
    margin-right: 15px;
  }

  @media (min-width: 630px) {
    flex-direction: row;
    justify-content: space-between;

    & div button {
      width: auto;
    }
  }
`