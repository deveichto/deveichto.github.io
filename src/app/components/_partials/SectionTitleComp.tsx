import { motion } from "motion/react";

const SectionTitleComp = ({
    title, 
    subTitle,
    details
}:{
    title: string,
    subTitle?: string,
    details?: string
}) => {
    return (
        <>
            {subTitle &&
                <motion.h4 
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.3, duration: 0.5}}
                className="text-center mb-2 text-lg font-Ovo">{subTitle}</motion.h4>
            }

            <motion.h2 
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.3, duration: 0.5}}
                className="text-center text-5xl font-Ovo">{title}</motion.h2>

            <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.7, duration: 0.5}}
                className="text-center mx-auto mt-5 mb-12 font-Ovo">{details}</motion.p>
        </>
    )
}

export default SectionTitleComp
