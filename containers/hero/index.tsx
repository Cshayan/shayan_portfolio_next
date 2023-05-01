import Button from "@/components/button";
import Name from "@/components/name";
import Navbar from "@/components/navbar";
import { SKILLS_LIST } from "@/constants/data";
import { GreenRegularText } from "@/styles/global-styles";
import Image from "next/image";
import React from "react";
import {
  HeroLogoImage,
  Row,
  WhiteText,
  Container,
  HeroContent,
  ViewButtonWrapper,
  TechStackIconContainer,
  TechIcons,
} from "./styles";

const Hero = (): JSX.Element => {
  const onResumeViewClick = (): void => {
    window.open("/ShayanChatterjee_Resume.pdf", "_blank");
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <HeroContent>
            <p>
              I <WhiteText>am</WhiteText>
            </p>
            <Name showWave />
            <ViewButtonWrapper>
              <Button buttonText="View my resume" onClick={onResumeViewClick} />
            </ViewButtonWrapper>
            <TechStackIconContainer margin>
              <WhiteText>Tech stack </WhiteText>
              <GreenRegularText style={{ margin: "0 1em" }}>|</GreenRegularText>
              <TechStackIconContainer>
                {SKILLS_LIST.map((item) => (
                  <TechIcons
                    alt={item.title}
                    src={item.logo}
                    width={30}
                    height={30}
                    key={item.id}
                  />
                ))}
              </TechStackIconContainer>
            </TechStackIconContainer>
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
