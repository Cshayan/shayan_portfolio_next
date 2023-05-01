import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";

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
    </Container>
  );
};

export default Navbar;
