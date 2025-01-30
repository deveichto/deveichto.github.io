'use client';
import Image from "next/image"
import { Projects } from "../datas/data"
import { assets } from "../assets/assets"
import { useState } from "react"
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import ImageComp from "./_partials/ImageComp";

export interface Projects {
    id: number,
    name: string,
    position: string,
    skills: {
        language: string,
        scripting: string,
        database: string,
        frontend: string,
        webhost: string,
        tools: string,
        others: string
    },
    details: string,
    banner: string,
    link: string
}

const ProjectsComp = () => {
    const [openProject, setOpenProject] = useState(false);
    const [projectDetails, setProjectDetails] = useState(Array<Projects>);

    const GetProjectDetails = (id: number) => {
        for (let i = 0; i < Projects.length; i++) {
            if (Projects[i].id == id)
                setProjectDetails([Projects[i]]);
        }

        setOpenProject(true);
    }

    return (
        <>
            <div id="projects" className="w-full px-[6%] py-10 scroll-mt-20 mt-20 md:mt-0">
                <h4 className="text-center mb-2 text-lg font-Ovo hidden">Portfolio</h4>
                <h2 className="text-center text-5xl font-Ovo">Projects</h2>

                <p className="text-center mx-auto mt-5 mb-12 font-Ovo">Explore some of my work! Click on each project to dive into the full details and see what I’ve created.</p>

                <div className="grid grid-cols-auto md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black">
                    {Projects.map( (p) => (
                        <div key={p.id} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{backgroundImage: `url(${p.banner})`}} onClick={() => GetProjectDetails(p.id)}>
                            <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div>
                                    <h2 className="font-semibold">{p.name}</h2>
                                    <p className="text-sm text-gray-700">{p.position}</p>
                                </div>
                                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-300 transition">
                                    <Image src={assets.send_icon} alt="View Project Details" className="w-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {openProject && (
                <div className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                    <div className="bg-white text-gray-500 p-2 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] h-[600px] md:h-auto overflow-x-hidden overflow-y-auto">
                        <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setOpenProject(false)}>
                            <MdClose width={14} height={14} className="text-black" />
                        </div>

                        <div className="mt-10">
                            <Image src={projectDetails[0]?.banner} className="w-full max-h-[400px]" width={1000} height={1000} alt="Test" />
                
                            <div className="flex flex-row items-start justify-between mt-5">
                                <div className="flex flex-row items-start justify-start gap-2">
                                    <h1 className="font-semibold">Project:</h1>
                                    <p>{projectDetails[0]?.name}</p>
                                </div>

                                <Link href={projectDetails[0]?.link} target="_blank" className="text-xs text-blue-700 hover:underline gap-1 flex flex-row items-center justify-center"><FaGlobe /> Visit Website</Link>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-2">
                                <h1 className="font-semibold">Role:</h1>
                                <p>{projectDetails[0]?.position}</p>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h1 className="font-semibold">Description:</h1>
                                <p className="text-sm">{projectDetails[0]?.details}</p>
                            </div>
                            <h1 className="font-semibold mt-3">Skills:</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                {projectDetails[0].skills.language &&
                                    <div className="">
                                        <h1>Programming Language:</h1>
                                        <ImageComp data={projectDetails[0].skills.language} />
                                    </div>
                                }
                                {projectDetails[0].skills.scripting &&
                                    <div className="">
                                        <h1>Scripting:</h1>
                                        <ImageComp data={projectDetails[0].skills.scripting} />
                                    </div>
                                }
                                {projectDetails[0].skills.frontend &&
                                    <div className="">
                                        <h1>Frontend:</h1>
                                        <ImageComp data={projectDetails[0].skills.frontend} />
                                    </div>
                                }
                                {projectDetails[0].skills.database &&
                                    <div className="">
                                        <h1>Database:</h1>
                                        <ImageComp data={projectDetails[0].skills.database} />
                                    </div>
                                }
                                {projectDetails[0].skills.tools &&
                                    <div className="">
                                        <h1>Tools:</h1>
                                        <ImageComp data={projectDetails[0].skills.tools} />
                                    </div>
                                }
                                {projectDetails[0].skills.webhost &&
                                    <div className="">
                                        <h1>Hosting:</h1>
                                        <ImageComp data={projectDetails[0].skills.webhost} />
                                    </div>
                                }
                                {projectDetails[0].skills.others &&
                                    <div className="">
                                        <h1>Others:</h1>
                                        <ImageComp data={projectDetails[0].skills.others} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectsComp
