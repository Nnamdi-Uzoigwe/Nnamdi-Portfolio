// import { ArrowUpRightFromSquareIcon, ExternalLink, Github } from "lucide-react";


// export default function Card({ img, name, desc, stack}) {
//     return (
//         <div className="bg-white shadow-md overflow-hidden h-auto relative rounded-lg pb-10">
//             <img src={img} alt="" className="border-b-[1px] h-[200px] border-gray-300" />
//             <div className="mt-4 px-3">
//                 <h4 className="text-xl font-semibold">{name}</h4>
//                 <p className="mt-4 text-gray-500">{desc}</p>
//                 <div className="mt-2 mb-8 flex gap-2">
//                     {stack?.map((item) => (
//                         <div className="text-xs bg-gray-200 rounded-xl py-[4px] px-2">{item.name}</div>
//                     ))}
//                 </div>

//                 <div className="absolute bottom-4 flex gap-2">
//                     <div className="flex border-[1px] cursor-pointer border-gray-300 p-2  gap-2 items-center">Demo <span><ExternalLink /></span></div>
//                     <div className="flex border-[1px] cursor-pointer border-gray-300 p-2  gap-2 items-center">Github <span><Github /></span></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { ExternalLink, Github } from "lucide-react";

export default function Card({ img, name, desc, stack }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden min-h-[400px] flex flex-col">
            <img
                src={img}
                alt=""
                className="border-b border-gray-300 h-[200px] w-full object-cover"
            />

            <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                    <h4 className="text-xl font-semibold">{name}</h4>
                    <p className="mt-2 text-gray-500 text-sm">{desc}</p>

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
                        href="#"
                        className="flex items-center gap-2 border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 transition rounded-md"
                    >
                        Demo <ExternalLink size={16} />
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 transition rounded-md"
                    >
                        Github <Github size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}

