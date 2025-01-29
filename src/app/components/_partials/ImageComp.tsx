import { assets } from "@/app/assets/assets";
import Image, { StaticImageData } from "next/image";

const ImageComp = ({data}:{data: string}) => {
     const splitData = data.split("|");

     const returnAssets = (s: string) => {
        const skill = s.toLowerCase();
        if (skill.includes("php")) {
            return assets.php;
        } else if (skill.includes("codeigniter")) {
            return assets.codeigniter;
        } else if (skill.includes("bootstrap")) {
            return assets.bootstrap;
        } else if (skill == "css" || skill == "css 3") {
            return assets.css;
        } else if (skill.includes("html")) {
            return assets.html;
        } else if (skill.includes("javascript")) {
            return assets.javascript;
        } else if (skill.includes("json")) {
            return assets.json;
        } else if (skill.includes("mysql")) {
            return assets.mysql;
        } else if (skill.includes("webhosting")) {
            return assets.webhosting;
        } else if (skill.includes("vscode")) {
            return assets.vscode;
        } else if (skill.includes("git")) {
            return assets.git;
        } else if (skill.includes("tailwind")) {
            return assets.tailwindcss;
        } else if (skill.includes("react")) {
            return assets.react;
        } else if (skill.includes("jquery")) {
            return assets.jquery;
        } else if (skill.includes("ajax")) {
            return assets.ajax;
        } else if (skill.includes("typescript")) {
            return assets.typescript;
        } else if (skill.includes("mongodb")) {
            return assets.mongodb;
        } else if (skill.includes("next.js") || skill.includes("nextjs")) {
            return assets.nextjs;
        } else if (skill.includes("seo")) {
            return assets.seo;
        } 
     }

    return (
        <ul className="flex items-center gap-3 sm:gap-3">
            {splitData.map((s) => (
                <li key={s} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 group relative">
                    <Image src={returnAssets(s) as StaticImageData} alt={s} className="w-5 sm:w-12" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{s}</span>
                </li>
            ))}
        </ul>
    )
}

export default ImageComp
