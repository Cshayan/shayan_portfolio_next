import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  padding: 16px 24px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.6;
    transition: opacity 0.5s ease-in;
  }
`;
