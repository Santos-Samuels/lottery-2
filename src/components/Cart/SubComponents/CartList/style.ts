import styled from "styled-components";

export const Container = styled.div<{scrollType: string}>`
  margin: 0 15px;
  
  & div {
    max-height: 240px;
    overflow-y: ${props => props.scrollType};
  }

  & div::-webkit-scrollbar {
    width: 5px;
  }
    
  & div::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 30px;
  }
    
  & div::-webkit-scrollbar-thumb {
      background: #888; 
      border-radius: 30px;
  }
    
  & div::-webkit-scrollbar-thumb:hover {
      background: #555; 
  }
`

export const EmpetyText = styled.h3`
  text-align: center;
  opacity: 0.5;
`