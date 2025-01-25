import AboutComp from "./components/About";
import ContactComp from "./components/Contacts";
import FooterComp from "./components/Footer";
import HeaderComp from "./components/Header";
import IntroComp from "./components/Intro";
import ProjectsComp from "./components/Projects";
import ServicesComp from "./components/Services";

export default function Home() {
    return (
        <>
          <HeaderComp />
          <IntroComp />
          <ProjectsComp />
          <ServicesComp />
          <AboutComp />
          <ContactComp />
          <FooterComp />
        </>
    );
}
