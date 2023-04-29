import Image from "next/image";
import styled from "styled-components";

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
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const HeroHeading = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontsize.heading};
`;

export const HeroHeadingGreen = styled(HeroHeading)`
  color: ${(props) => props.theme.colors.primary};
`;

export const WhiteText = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export const ViewButtonWrapper = styled.div`
  margin-top: 1.5em;
`;
