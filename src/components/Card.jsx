import { ArrowUpRightFromSquareIcon, ExternalLink, Github } from "lucide-react";


export default function Card({ img, name, desc, stack}) {
    return (
        <div className="bg-white shadow-md overflow-hidden h-auto relative rounded-lg pb-10">
            <img src={img} alt="" className="border-b-[1px] h-[200px] border-gray-300" />
            <div className="mt-4 px-3">
                <h4 className="text-xl font-semibold">{name}</h4>
                <p className="mt-4 text-gray-500">{desc}</p>
                <div className="mt-2 mb-8 flex gap-2">
                    {stack?.map((item) => (
                        <div className="text-xs bg-gray-200 rounded-xl py-[4px] px-2">{item.name}</div>
                    ))}
                </div>

                <div className="absolute bottom-4 flex gap-2">
                    <div className="flex border-[1px] cursor-pointer border-gray-300 p-2  gap-2 items-center">Demo <span><ExternalLink /></span></div>
                    <div className="flex border-[1px] cursor-pointer border-gray-300 p-2  gap-2 items-center">Github <span><Github /></span></div>
                </div>
            </div>
        </div>
    )
}