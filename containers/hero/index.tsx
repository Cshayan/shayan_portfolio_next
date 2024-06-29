import Button from "@/components/button";
import Name from "@/components/name";
import Navbar from "@/components/navbar";
import { RESUME_PDF, SKILLS_LIST } from "@/constants/data";
import { GreenRegularText } from "@/styles/global-styles";
import React, { useState } from "react";
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
import PdfViewer from "@/components/pdf-viewer";

const Hero = (): JSX.Element => {

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const onResumeViewClick = (): void => {
    setIsResumeModalOpen(true);
  };

  const onCloseClick = (): void => {
    setIsResumeModalOpen(false)
  }

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
            <PdfViewer onRequestClose={onCloseClick} isOpen={isResumeModalOpen} pdfUrl={RESUME_PDF} />
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
