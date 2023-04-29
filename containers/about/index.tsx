import Name from "@/components/name";
import Seperator from "@/components/seperator";
import Image from "next/image";
import React from "react";
import {
  Container,
  Center,
  Row,
  StyledMainIntro,
  WhiteText,
  CenterColumn,
} from "./styles";

const About = (): JSX.Element => {
  return (
    <Container>
      <Center>
        <Seperator text="About" />
      </Center>
      <Row>
        <CenterColumn>
          <Image
            src="/assets/profile_image.png"
            alt="profile-pic"
            width={300}
            height={300}
          />
          <Name />
        </CenterColumn>
        <StyledMainIntro>
          <WhiteText>
            I am a frontend developer with 2 years of experience specializing in
            building web and mobile applications using ReactJS and React Native
            and other technologies.
          </WhiteText>
          <br />
          <WhiteText>
            I am highly skilled in developing complex user interfaces and
            responsive designs that enhance user experience. With a passion for
            problem-solving, I am dedicated to finding solutions to complex
            challenges and delivering innovative solutions to clients.
          </WhiteText>
        </StyledMainIntro>
      </Row>
    </Container>
  );
};

export default About;
