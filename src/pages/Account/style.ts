import styled from "styled-components"

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #DDDDDD;
  margin: 20px 0;
  padding-bottom: 5px;
  font-size: 18px;

  & div {
    display: flex;
    flex-wrap: nowrap;
  }

  & div i {
    margin-left: 10px;
    cursor: pointer;
  }
`

export const Content = styled.div`
  margin: 50px auto;
  width: auto;
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0px 3px 25px #00000014;

  & div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F2F2F2;
    padding: 20px;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #DDDDDD;
  }

  & div:first-child span {
    cursor: pointer;
    color: #B5C401;
    margin-left: 10px;
  }

  & div:first-child span i {
    margin-left: 5px;
  }

  & div {
    padding: 20px;
  }

  & input {
    border: 1px solid #DDDDDD;
    font-size: 16px;
    padding: 3px 5px;
    border-radius: 7px;
  }

  & button {
    background-color: #B5C401;
    color: #FFFFFF;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
  }

  & button:hover {
    background-color: #c6d604;
  }

  @media (min-width: 950px) {
    width: 50%;
  }
`