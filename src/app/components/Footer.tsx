import Image from "next/image"
import { assets } from "../assets/assets"
import Link from "next/link"

const FooterComp = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <h1 className="text-xl text-gray-600 dark:text-white">Eichto<span className="font-semibold text-blue-600">.</span></h1>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} alt="Mail Icon" className="w-5" />
                    markjeff.abasula@outlook.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[6%] mt-12 py-6">
                <p>
                    &copy; 2025 
                    Eichto. 
                    All rights reserved.
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><Link href="https://deveichto.github.io/" target="_blank">GitHub</Link></li>
                    <li><Link href="https://www.linkedin.com/in/markjeffabasula/" target="_blank">LinkedIn</Link></li>
                    <li><Link href="https://www.instagram.com/junichie_tv/" target="_blank">Instagram</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterComp
