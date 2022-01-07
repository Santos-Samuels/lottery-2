import styled from "styled-components"

export const Header = styled.header`
  font-size: 14px;
  padding: 10px 30px 2px;
  border-bottom: 1px solid #EBEBEB;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 820px) {
    padding: 10px 90px 2px;
  }

  @media (min-width: 700px) {
    font-size: 17px;
  }
`

export const Logo = styled.div`
  width: 65px;
  text-align: center;
  position: relative;

  & span::before {
    content: ".";
    color: transparent;
  }

  & span {
    width: 65px;
    height: 2px;
    left: 0;
    position: absolute;
    border-bottom: 5px solid #B5C401;
    border-radius: 20px;
  }

  @media (min-width: 700px) {
    width: 75px;

    & span {
      width: 75px;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  & h4 {
    margin-left: 20px;
  }
`