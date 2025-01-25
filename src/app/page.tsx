'use client'

import { useEffect, useState } from "react";
import AboutComp from "./components/About";
import ContactComp from "./components/Contacts";
import FooterComp from "./components/Footer";
import HeaderComp from "./components/Header";
import IntroComp from "./components/Intro";
import ProjectsComp from "./components/Projects";
import ServicesComp from "./components/Services";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    useEffect( () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    useEffect( () => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = '';
        }
    }, [isDarkMode]);

    return (
        <>
          <HeaderComp isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <IntroComp />
          <ProjectsComp />
          <ServicesComp isDarkMode={isDarkMode} />
          <AboutComp isDarkMode={isDarkMode} />
          <ContactComp />
          <FooterComp />
        </>
    );
}
