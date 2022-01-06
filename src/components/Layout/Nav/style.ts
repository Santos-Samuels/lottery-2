import styled from "styled-components"

export const Header = styled.header`
  padding: 10px 30px 2px;
  border-bottom: 1px solid #EBEBEB;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 820px) {
    padding: 10px 90px 2px;
  }
`

export const Logo = styled.div`
  width: 75px;
  text-align: center;
  position: relative;

  & span::before {
    content: ".";
    color: transparent;
  }

  & span {
    width: 75px;
    height: 2px;
    left: 0;
    position: absolute;
    border-bottom: 5px solid #B5C401;
    border-radius: 20px;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  & h4 {
    margin-left: 20px;
  }
`