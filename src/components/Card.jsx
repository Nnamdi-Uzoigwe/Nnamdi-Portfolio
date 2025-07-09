
import { ExternalLink, Github } from "lucide-react";

export default function Card({ img, name, desc, stack, link, gitlink }) {
    return (
        <div className="bg-white dark:bg-[#1e293b] shadow-md rounded-lg overflow-hidden min-h-[400px] flex flex-col">
            <img
                src={img}
                alt=""
                className="border-b border-gray-300 dark:border-none h-[200px] w-full object-cover"
            />

            <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                    <h4 className="text-xl font-semibold dark:text-gray-200">{name}</h4>
                    <p className="mt-2 text-gray-500 dark:text-gray-200 text-sm">{desc}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {stack?.map((item, index) => (
                            <div
                                key={index}
                                className="text-xs bg-gray-200 rounded-xl py-1 px-2"
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <a
                        href={link}
                        target="_blank"
                        className="flex items-center gap-2 dark:text-gray-300 border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 transition rounded-md"
                    >
                      Demo <ExternalLink size={16} />
                    </a>
                    <a
                        href={gitlink}
                        target="_blank"
                        className="flex items-center gap-2 dark:text-gray-300 border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 transition rounded-md"
                    >
                        Github <Github size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}

