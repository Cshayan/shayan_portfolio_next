import { EXPERIENCE_LIST } from "@/constants/data";
import { GreenRegularText, WhiteRegularText } from "@/styles/global-styles";
import React from "react";
import { ExperienceCardStyled, Row, SpaceAroundRow } from "./styles";
import { Organization } from "@styled-icons/fluentui-system-filled/Organization";
import { WorkOutline } from "@styled-icons/material/WorkOutline";

interface IExperienceCard {
  org: string;
  title: string;
  yoe: string;
  index: number;
}

const ExperienceCard = ({
  org,
  title,
  yoe,
  index,
}: IExperienceCard): JSX.Element => {
  return (
    <ExperienceCardStyled index={index}>
      <SpaceAroundRow>
        <Organization width={20} height={20} />
        <WhiteRegularText style={{ margin: "0 1em" }}>{org}</WhiteRegularText>
      </SpaceAroundRow>
      <br />
      <SpaceAroundRow>
        <WorkOutline width={20} height={20} />
        <WhiteRegularText style={{ margin: "0 1em" }}>{title}</WhiteRegularText>
      </SpaceAroundRow>
      <br />
      <GreenRegularText style={{ fontSize: "1.5rem" }}>{yoe}</GreenRegularText>
    </ExperienceCardStyled>
  );
};

export default ExperienceCard;
