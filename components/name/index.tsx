import React from "react";
import { NameHeading, NameHeadingGreen } from "./styles";

const Name = ({ showWave = false }): JSX.Element => {
  return (
    <NameHeading>
      Shayan <NameHeadingGreen>Chatterjee</NameHeadingGreen>{" "}
      {!!showWave && <span>👋</span>}
    </NameHeading>
  );
};

export default Name;
