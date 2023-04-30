import Seperator from "@/components/seperator";
import { EXPERIENCE_LIST } from "@/constants/data";
import React from "react";
import ExperienceCard from "./experience-card";
import {
  Center,
  CenterDash,
  Container,
  NoOfYearsContainer,
  Row,
  YearsCountText,
  YearsText,
} from "./styles";

const Experience = (): JSX.Element => {
  return (
    <>
      <Container>
        <Center>
          <Seperator text="Experience" />
        </Center>
        <NoOfYearsContainer>
          <YearsCountText>#02</YearsCountText>
          <YearsText>Years;</YearsText>
        </NoOfYearsContainer>
        <Row>
          {EXPERIENCE_LIST.map((item, index) => (
            <ExperienceCard
              index={index}
              key={item.id}
              org={item.org}
              title={item.title}
              yoe={item.time}
            />
          ))}
        </Row>
      </Container>
      <CenterDash />
    </>
  );
};

export default Experience;
