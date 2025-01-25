import Image from "next/image"
import { Projects } from "../datas/data"
import { assets } from "../assets/assets"

const ProjectsComp = () => {
    return (
        <div id="projects" className="w-full px-[6%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My Projects</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                These are my projects that i made. You can click each to view the full details.
            </p>

            <div className="grid grid-cols-auto md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black">
                {Projects.map( (p) => (
                    <div key={p.id} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{backgroundImage: `url(${p.thumbnail})`}}>
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
    )
}

export default ProjectsComp
