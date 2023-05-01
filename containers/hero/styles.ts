import Image from "next/image";
import styled from "styled-components";

interface ITechStackIconContainer {
  margin?: boolean;
}

export const Container = styled.section`
  margin-right: 10em;
  margin-left: 3em;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 7em;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeroLogoImage = styled(Image)`
  object-fit: contain;
  margin-top: 5em;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const WhiteText = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export const ViewButtonWrapper = styled.div`
  margin-top: 1.5em;
`;

export const TechStackIconContainer = styled.div<ITechStackIconContainer>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => (props.margin ? "2em" : 0)};
`;

export const TechIcons = styled(Image)`
  margin: 0 1em;
`;
