import About from "@/containers/about";
import Contact from "@/containers/contact";
import Experience from "@/containers/experience";
import Hero from "@/containers/hero";
import Skills from "@/containers/skills";
import { CentralMobileAlign } from "@/styles/global-styles";

const Home = () => {
  return (
    <CentralMobileAlign>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </CentralMobileAlign>
  );
};

export default Home;
