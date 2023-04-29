import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.fontsize.normal};
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`;

export const CentralMobileAlign = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default GlobalStyles;
