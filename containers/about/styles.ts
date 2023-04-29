import styled from "styled-components";

export const Container = styled.section`
  margin-right: 10em;
  margin-left: 3em;
  margin-top: 15em;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 7em;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledMainIntro = styled.main`
  padding: 0rem 0.8rem;
  margin-left: 10rem;
`;

export const WhiteText = styled.p`
  color: ${(props) => props.theme.colors.white};
`;
