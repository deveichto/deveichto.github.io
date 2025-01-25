'use client';
import Image from "next/image"
import { assets } from "../assets/assets";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const HeaderComp = ({
    isDarkMode, 
    setIsDarkMode
}: {
    isDarkMode: boolean,
    setIsDarkMode: Dispatch<SetStateAction<boolean>>
}) => {
    // Mobile Menu
    const sideMenuRef = useRef<HTMLUListElement>(null);
    
    const openMenu = () => {
        if (sideMenuRef.current != null) {
            sideMenuRef.current.style.transform = 'translatex(-16rem)';
        }
    }
    const closeMenu = () => {
        if (sideMenuRef.current != null) {
            sideMenuRef.current.style.transform = 'translatex(16rem)';
        }
    }

    // For Scroll
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>

            <nav className={`w-full fixed px-5 py-4 flex items-center justify-between z-50 lg:px-8 xl:px-[8%] ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
                <Link href="#top" className="">
                    <h1 className="text-sm text-gray-600 dark:text-white">Eichto<span className="font-semibold text-blue-600">.</span></h1>
                </Link>

                <ul className={`hidden md:flex items-center gap-8 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    <li><Link href="#top" className='font-Ovo'>Home</Link></li>
                    <li><Link href="#projects" className='font-Ovo'>Projets</Link></li>
                    <li><Link href="#services" className='font-Ovo'>Services</Link></li>
                    <li><Link href="#about" className='font-Ovo'>About</Link></li>
                    <li><Link href="#contacts" className='font-Ovo'>Contacts</Link></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode((prev: boolean) => !prev)}><Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Theme Mode" className="w-6" /></button>

                    <Link href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3" />
                    </Link>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-100 bg-opacity-50 backdrop-blur-lg transition duration-500 dark:text-black rounded-l">
                    <div className="absolute right-6 top-6">
                        <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" onClick={closeMenu} />
                    </div>

                    <li><Link href="#top" className="" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="#projects" className="" onClick={closeMenu}>Projects</Link></li>
                    <li><Link href="#services" className="" onClick={closeMenu}>Services</Link></li>
                    <li><Link href="#about" className="" onClick={closeMenu}>About</Link></li>
                    <li><Link href="#contacts" className="" onClick={closeMenu}>Contacts</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderComp
