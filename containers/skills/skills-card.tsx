import Image from "next/image";
import React from "react";
import { CenterColumn, Row, SkilledCardView, SkillsTitle } from "./styles";

interface ISkillsCard {
  logo: string;
  title: string;
}

const SkillsCard = ({ logo, title }: ISkillsCard): JSX.Element => {
  return (
    <SkilledCardView>
      <Image src={logo} alt="skills_logo" width={40} height={40} />
      <SkillsTitle>{title}</SkillsTitle>
    </SkilledCardView>
  );
};

export default SkillsCard;
