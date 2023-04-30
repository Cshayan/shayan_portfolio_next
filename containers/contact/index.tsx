import Seperator from "@/components/seperator";
import { CONTACT_LIST } from "@/constants/data";
import React from "react";
import { Center, Container, IconContainer, IconWrapper, Row } from "./styles";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/bootstrap/Github";
import { Medium } from "@styled-icons/boxicons-logos/Medium";

export const IconComponent = ({ value }: { value: string }): JSX.Element => {
  if (value === "github") {
    return <Github width={60} height={60} color="#fff" />;
  }

  if (value === "linkedin") {
    return <LinkedinSquare width={60} height={60} color="#fff" />;
  }

  if (value === "medium") {
    return <Medium width={60} height={60} color="#fff" />;
  }

  return <></>;
};

const Contact = (): JSX.Element => {
  const onContactIconClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <Center>
        <Seperator text="Connect with me" />
      </Center>
      <IconContainer>
        {CONTACT_LIST.map((item) => {
          return (
            <IconWrapper
              key={item.id}
              onClick={() => onContactIconClick(item.url)}
            >
              <IconComponent value={item.val} />
            </IconWrapper>
          );
        })}
      </IconContainer>
    </Container>
  );
};

export default Contact;
