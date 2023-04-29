import Button from "@/components/button";
import Name from "@/components/name";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import {
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
            <Name />
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
      <Image
        src="/assets/polygon_seperator.png"
        alt="polygon"
        fill
        style={{ objectFit: "contain", marginTop: "12em" }}
      />
    </>
  );
};

export default Hero;
