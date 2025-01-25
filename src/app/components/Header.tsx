import Image from "next/image"
import { assets } from "../assets/assets";
import Link from "next/link";
import NavLinks from "./_partials/NavLinks";

const HeaderComp = () => {
    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%]">
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>

            <nav className={`w-full fixed px-5 py-4 flex items-center justify-between z-50 lg:px-8 xl:px-[8%]`}>
                <Link href="#top" className="">
                    <h1 className="text-sm text-gray-600">Eichto<span className="font-semibold text-blue-600">.</span></h1>
                </Link>

                <ul className={`hidden md:flex items-center gp-8 lg:gap-8 rounded-full px-12 py-3`}>
                    <NavLinks url="#top" className="">Home</NavLinks>
                    <NavLinks url="#projects" className="">Projects</NavLinks>
                    <NavLinks url="#services" className="">My Services</NavLinks>
                    <NavLinks url="#about" className="">About</NavLinks>
                    <NavLinks url="#contacts" className="">Contacts</NavLinks>
                </ul>

                <div className="flex items-center gap-4">
                    <button><Image src={assets.sun_icon} alt="Theme Mode" className="w-6" /></button>

                    <Link href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">
                        Contact
                        <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
                    </Link>

                    <button className="block md:hidden ml-3">
                        <Image src={assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default HeaderComp
