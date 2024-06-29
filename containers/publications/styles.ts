import styled from "styled-components";

export const Container = styled.section`
  margin-right: 10em;
  margin-left: 3em;
  margin-top: 10em;

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

export const SpaceAroundDiv = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`

export const HorizontalMarginDiv = styled.div`
  margin: 0 20px;
`

export const StyledPublicationCard = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 12px;
  padding: 20px;
  margin: 20px 40px;
  cursor: pointer;
  outline: solid 0px ${(props) => props.theme.colors.primary};
  transition: outline 0.1s ease-in;

  &:hover {
    outline-width: 2px;
  }
`;
