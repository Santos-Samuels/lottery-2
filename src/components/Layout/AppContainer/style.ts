import styled from "styled-components";

export const Container = styled.div`
  & p {
    font-size: 13px;
  }

  & main {
    margin: 20px 30px;
    min-height: calc(100vh - 200px);
  }

  @media (min-width: 1000px) {
    & main {
      margin: 30px 90px;
    }
  }

  @media (min-width: 700px) {
    & p {
      font-size: 16px;
    }
  }
`