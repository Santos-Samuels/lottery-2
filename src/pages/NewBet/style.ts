import styled from 'styled-components';

export const HeaderContent = styled.header`
  margin: 20px 0 5px;

  & p:first-child {
    text-transform: uppercase;
    font-size: 18px;
  }

  & div {
    margin: 20px 0;
  }

  & p:nth-child(2) {
    font-size: 15px;
  }

  @media (min-width: 820px) {
    margin: 30px 0 15px;

    & div {
      margin: 30px 0;
    }
  }

  @media (min-width: 700px) {
    & p:first-child {
      font-size: 22px;
    }
  }
`

export const Content = styled.div`
  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: auto 35%;
    
    & section:first-child {
      margin-right: 35px;
    }
  }

  @media (min-width: 1100px) {
    grid-template-columns: auto 30%;
  }
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    font-size: 20px;
    background-color: transparent;
    border: 1px solid #868686;
    color: #868686;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
  }

  & button:hover {
    background-color: #868686;
    color: #FFFFFF;
  }
`