import styled from "styled-components"

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #DDDDDD;
  margin: 20px 0;
  padding-bottom: 5px;
  font-size: 18px;
`

export const Content = styled.div`
  margin: 50px auto;
  width: auto;
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  padding: 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 3px 25px #00000014;

  @media (min-width: 950px) {
    width: 50%;
  }
`