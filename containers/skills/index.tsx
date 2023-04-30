import Seperator from "@/components/seperator";
import { SKILLS_LIST } from "@/constants/data";
import React from "react";
import SkillsCard from "./skills-card";
import { Center, Container, Row, SkilledCardViewWrapper } from "./styles";

const SKILLS_LIST_SUB = [
  SKILLS_LIST.slice(0, SKILLS_LIST.length / 2),
  SKILLS_LIST.slice(SKILLS_LIST.length / 2),
];

const Skills = (): JSX.Element => {
  return (
    <Container>
      <Center>
        <Seperator text="Skills" />
      </Center>
      <SkilledCardViewWrapper>
        {SKILLS_LIST_SUB[0].map((item) => (
          <SkillsCard key={item.id} logo={item.logo} title={item.title} />
        ))}
      </SkilledCardViewWrapper>
      <SkilledCardViewWrapper>
        {SKILLS_LIST_SUB[1].map((item) => (
          <SkillsCard key={item.id} logo={item.logo} title={item.title} />
        ))}
      </SkilledCardViewWrapper>
    </Container>
  );
};

export default Skills;
