import Hero from "../../components/Hero";
import Scroller from "../../components/Scroller";
import Portfolio from "../../components/Portfolio";
import About from "../../components/About";
import SkillsScroller from "../../components/SkillsScroller";
import References from "../../components/References";
import Brands from "../../components/Brands";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Scroller />
      <Portfolio />
      <About />
      <SkillsScroller />
      <References />
      <Brands />
      <Contact />
    </>
  );
}
