import About from "@/containers/about";
import Contact from "@/containers/contact";
import Experience from "@/containers/experience";
import Hero from "@/containers/hero";
import Skills from "@/containers/skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
