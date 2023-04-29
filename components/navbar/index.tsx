import Image from "next/image";
import Link from "next/link";
import { Container, StyledLink, NavContainer } from "./styles";

const Navbar = (): JSX.Element => {
  return (
    <Container>
      <Link href="/">
        <Image
          src={"/assets/new_logo.png"}
          width={300}
          height={100}
          alt="logo"
          style={{ objectFit: "contain" }}
        />
      </Link>
      <NavContainer>
        <Link href="#about">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="#experience">
          <StyledLink>Experience</StyledLink>
        </Link>
        <Link href="#skills">
          <StyledLink>Skills</StyledLink>
        </Link>
        <Link href="#contact">
          <StyledLink>Contact</StyledLink>
        </Link>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
