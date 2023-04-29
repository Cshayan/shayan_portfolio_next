import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  margin: 0px 30px;
`;
