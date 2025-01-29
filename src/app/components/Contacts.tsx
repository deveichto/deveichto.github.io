import Image from "next/image"
import { assets } from "../assets/assets"
import { MdEmail, MdPhone } from "react-icons/md"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import Link from "next/link"

const ContactComp = () => {
    return (
        <div id="contacts" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none">
            <div className="w-full text-center">
                <h4 className="text-center mb-2 text-lg font-Ovo">Contact Me</h4>
                <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
                
                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                    I&apos;d love to hear from you. You can send me an email by using the form or contact me through my contact informations below.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <div className="w-full lg:w-1/2 text-center h-[430px]">
                    <h1>Send Email</h1>
                    <form className="max-w-2xl mx-auto">
                        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                            <input 
                                type="text" 
                                placeholder="Enter your full name" 
                                required 
                                className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dakr:border-white/90" name="name" />

                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dakr:border-white/90" 
                                name="email" />
                        </div>

                        <textarea 
                            rows={6}
                            placeholder="Enter your message" 
                            required 
                            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90" name="message"></textarea>
                        
                        <button 
                            type="submit" 
                            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover">Submit <Image src={assets.right_arrow_white} alt="submit" className="w-4" /></button>
                    </form>
                </div>
                <div className="w-0 border-black dark:border-white border-r h-[400px] hidden lg:block"></div>
                <div className="w-full mt-10 lg:mt-0 lg:w-1/2 lg:px-10 h-[430px]">
                    <h1 className="text-center mb-10">Contact Me</h1>

                    <div className="flex flex-col gap-5 text-gray-500 dark:text-white">
                        <div className="flex flex-row items-start justify-start gap-2 text-sm">
                            <span className="flex flex-row gap-1 font-semibold"><MdPhone /> Mobile #:</span> <span>(+63) 961 516 8268</span>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2 text-sm">
                            <span className="flex flex-row gap-1 font-semibold"><MdEmail /> Email:</span> <span>markjeff.abasula@outlook.com</span>
                        </div>

                        <h2 className="mt-10 lg:mt-5 font-semibold">Social Media:</h2>
                        <Link href="https://www.linkedin.com/in/markjeffabasula/" target="_blank" className="flex flex-row items-start justify-start gap-2 text-sm"><FaLinkedin /> LinkedIn</Link> 
                        <Link href="https://www.instagram.com/junichie_tv/" target="_blank" className="flex flex-row items-start justify-start gap-2 text-sm"><FaInstagram /> Instagram</Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp
