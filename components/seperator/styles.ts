import styled from "styled-components";

export const StyledDashLine = styled.div`
  height: 0.7rem;
  width: 10rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SeperatorText = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontsize.heading};
  text-align: center;
  margin-top: 0.5rem;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
