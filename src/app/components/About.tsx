import Image from "next/image"
import { assets } from "../assets/assets"
import { AboutMeBox, Intro, ToolsInAbout } from "../datas/data"
import SectionTitleComp from "./_partials/SectionTitleComp"
import { motion } from "motion/react";

const AboutComp = ({isDarkMode}:{isDarkMode: boolean}) => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            id="about" 
            className="w-full px-[10%] py-1 md:py-10 scroll-mt-20">
                
            <SectionTitleComp title="About Me" />

            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8}}
                className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <motion.div 
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6}} 
                    className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
                </motion.div>

                <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.8, delay: 0.8}}  
                    className="flex-1">
                    <p className="mb-10 font-Ovo text-justify">{Intro.description}</p>

                    <motion.ul 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8, delay: 1}} 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                        {AboutMeBox.map(({icon, iconDark, title, description}, index) => (
                            <motion.li 
                                whileHover={{scale: 1.05}}
                                key={index} 
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover">
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                                <p className="text-gray-400 text-sm dark:text-white/80">{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4 
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.3, delay: 0.5}} 
                        className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I Use:</motion.h4>
                    <motion.ul 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1.5, delay: 0.6}} 
                        className="flex items-center gap-3 sm:gap-5">
                        {ToolsInAbout.map((at, i) => (
                            <motion.li 
                                whileHover={{scale: 1.1}}
                                key={i} 
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:bg-white group relative">
                                <Image src={at.image} alt="Tool" className="w-5 sm:w-7" />
                                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{at.name}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AboutComp
