import styled from "styled-components";

interface IExperienceStyled {
  index: number;
}

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
  justify-content: space-between;
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoOfYearsContainer = styled.div`
  margin-top: 3em;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const YearsCountText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontsize.heading};
`;

export const YearsText = styled(YearsCountText)`
  color: ${(props) => props.theme.colors.white};
`;

export const ExperienceCardStyled = styled.div<IExperienceStyled>`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 12px;
  padding: 20px;
  margin-top: ${(props) => (props.index % 2 === 0 ? "3em" : "8em")};
  margin-right: 3em;
  cursor: pointer;
  outline: solid 0px ${(props) => props.theme.colors.primary};
  transition: outline 0.4s ease-in;

  &:hover {
    outline-width: 2px;
  }
`;

export const CenterDash = styled.div`
  width: 90%;
  height: 5px;
  background: ${(props) => props.theme.colors.primary};
  margin: 50px 40px;
`;

export const SpaceAroundRow = styled.div`
  display: flex;
  flex-direction: row;
`;
