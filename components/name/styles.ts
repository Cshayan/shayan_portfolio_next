import styled from "styled-components";

export const NameHeading = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontsize.heading};
  margin-top: 1rem;
`;

export const NameHeadingGreen = styled(NameHeading)`
  color: ${(props) => props.theme.colors.primary};
`;
