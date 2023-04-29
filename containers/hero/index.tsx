import Button from "@/components/button";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import {
  HeroHeading,
  HeroHeadingGreen,
  HeroLogoImage,
  Row,
  WhiteText,
  Container,
  HeroContent,
  ViewButtonWrapper,
} from "./styles";

const Hero = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <HeroContent>
            <p>
              I <WhiteText>am</WhiteText>
            </p>
            <HeroHeading>
              Shayan <HeroHeadingGreen>Chatterjee</HeroHeadingGreen>
            </HeroHeading>
            <ViewButtonWrapper>
              <Button buttonText="View my resume" onClick={() => {}} />
            </ViewButtonWrapper>
          </HeroContent>
          <HeroLogoImage
            src="/assets/hero.png"
            alt="hero"
            width={300}
            height={300}
          />
        </Row>
      </Container>
    </>
  );
};

export default Hero;
