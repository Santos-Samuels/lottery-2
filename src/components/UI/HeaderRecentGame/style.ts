import styled from 'styled-components';

export const Section = styled.section`
  & h3 {
    text-transform: uppercase;
    white-space: nowrap;
  }

  & div:first-child {
    display: flex;
    flex-direction: column;
  }

  &:first-child section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 950px) {
    & h3 {
      margin-right: 50px;
    }

    & div:first-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`