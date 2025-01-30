import Image from "next/image"
import { assets } from "../assets/assets"
import { Intro } from "../datas/data"
import { motion } from "motion/react"

const IntroComp = () => {
    return (
        <div className="w-[85%] text-start mx-auto h-screen flex flex-col items-center justify-center">
            <motion.div
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                transition={{duration: 0.8, type: 'spring', stiffness: 100}}
                className="w-full px-12 py-10 scroll-mt-20 flex flex-col-reverse md:flex-row gap-2 mt-36 sm:mt-0">
                <motion.div 
                    initial={{x: -50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{delay: 0.3, duration: 0.6}}
                    className="w-full lg:w-1/2">
                    <div className="flex flex-col lg:items-start">
                        <span className="font-thin text-xl md:text-4xl">Hello, I&apos;m</span>
                        <h1 className="pb-5 md:pb-14 text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight lg:mt-12">
                            {Intro.name}
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            {Intro.title}
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify md:text-left">{Intro.details}</p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a href="#contacts" 
                                className="px-10 py-3 border rounded-full bg-black text-white border-gray-500 flex items-center gap-2 dark:bg-transparent hover:-translate-y-1 duration-500">
                                Contact me
                                <Image src={assets.right_arrow_white} alt="" className="w-4" />
                            </a>
                            <a href="/mark-jeff-abasula-cv.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:-translate-y-1 duration-500">
                                My Resume
                                <Image src={assets.download_icon} alt="" className="w-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{delay: 0.4, duration: 0.6}}
                    className="w-full lg:w-1/2 flex justify-center items-center mb-10 md:mb-0">
                    <div className="w-52 md:w-96">
                        <Image src={Intro.profile} alt="Profile" className="rounded-full md:rounded" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default IntroComp
