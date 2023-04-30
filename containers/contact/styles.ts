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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled(Row)`
  margin: 2em 0;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  &:hover {
    scale: 1.2;
    transition: scale 1s ease-in;
  }
`;
