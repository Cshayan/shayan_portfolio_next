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
           I am a Software Development Engineer at Bajaj Finserv Health, focusing on designing and developing mobile 
           and web applications. With a Computer Science degree and 3+ years experience, I specialize in React Native, 
           React.js, NextJS and UI/UX design. My passion lies in using technology to drive innovation, backed by a 
           foundation in agile methodologies and a drive to continually learn and enhance my skills.
          </WhiteText>
          <br />
        </StyledMainIntro>
      </Row>
    </Container>
  );
};

export default About;
