import React from "react";
import { Center, SeperatorText, StyledDashLine } from "./styles";

interface ISeperator {
  text: string;
}

const Seperator = ({ text }: ISeperator): JSX.Element => {
  return (
    <Center>
      <StyledDashLine />
      <SeperatorText>{text}</SeperatorText>
    </Center>
  );
};

export default Seperator;
