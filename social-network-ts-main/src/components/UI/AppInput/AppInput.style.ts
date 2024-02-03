import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 12px 15px;
  background-color: ${props => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${props => props.theme.colors.primeColor};
  }
`;
