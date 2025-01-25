import Image from "next/image"
import { assets } from "../assets/assets"

const ContactComp = () => {
    return (
        <div id="contacts" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none">
            <h4 className="text-center mb-2 text-lg font-Ovo">Contact Me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I&apos;d love to hear from you If you have any questions, comments, or feedback, please use the form below
            </p>

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
    )
}

export default ContactComp
