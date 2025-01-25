import Image from "next/image"
import { assets } from "../assets/assets"
import { Intro } from "../datas/data"

const IntroComp = () => {
    return (
        <div className="w-11/12 text-start mx-auto h-screen flex flex-col items-center justify-center">
            <div className="w-full px-12 py-10 scroll-mt-20 flex flex-col-reverse md:flex-row gap-2">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-7xl font-thin tracking-tight lg:mt-12">
                            {Intro.name}
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            {Intro.title}
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{Intro.details}</p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a href="#contact" 
                                className="px-10 py-3 border rounded-full bg-black text-white border-gray-500 flex items-center gap-2">
                                Contact me
                                <Image src={assets.right_arrow_white} alt="" className="w-4" />
                            </a>
                            <a href="#" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white">
                                My Resume
                                <Image src={assets.download_icon} alt="" className="w-4" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 md:mb-0">
                    <div className="w-52 md:w-96">
                        <Image src={Intro.profile} alt="Profile" className="rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroComp
