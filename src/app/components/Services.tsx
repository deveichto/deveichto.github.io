import Image from "next/image"
import { MyServices } from "../datas/data"
import Link from "next/link"
import { assets } from "../assets/assets"

const ServicesComp = ({isDarkMode}: {isDarkMode: boolean}) => {
    return (
        <div id="services" className="hidden w-full px-[6%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I offer?</h4>
            <h2 className="text-center text-5xl font-Ovo">My Services</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am an experienced Backend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {MyServices.map((s) => (
                    <div key={s.id} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <Image src={s.icon} alt={s.title} className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{s.title}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{s.description}</p>
                        <Link href="" className="flex items-center gap-2 text-sm mt-5">
                            Read more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} className="w-4" alt="read_more" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesComp
