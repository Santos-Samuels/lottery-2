import styled from "styled-components"

const InputError = styled.input<{isError: boolean}>`
  &:focus {
    outline: none;
    border-bottom: ${props => props.isError ? '3px solid red' : '3px solid #b5c401'};
  }
`

export default InputError