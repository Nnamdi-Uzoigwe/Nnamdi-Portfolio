import js from "../../assets/JS.png"
import react from "../../assets/react.png"
import ts from "../../assets/ts.png"
import next from "../../assets/next.png"
import node from "../../assets/node.png"
import express from "../../assets/express.png"
import mongodb from "../../assets/mongodb.png"
import tailwindcss from "../../assets/tailwind.png"
import git from "../../assets/git.png"

export default function SkillContent() {
    const data = [
        {
            id: 1,
            name: "JavaScript",
            img: js
        },
        {
            id: 2,
            name: "TypeScript",
            img: ts
        },
        {
            id: 3,
            name: "React",
            img: react
        },
        {
            id: 4,
            name: "Next.js",
            img: next
        },
        {
            id: 5,
            name: "Node.js",
            img: node
        },
        {
            id: 6,
            name: "Express.js",
            img: express
        },
        {
            id: 7,
            name: "MongoDB",
            img: mongodb
        },
        {
            id: 8,
            name: "Tailwind",
            img: tailwindcss
        },
        {
            id: 9,
            name: "Git",
            img: git
        }
    ]
    return (
        <div className="bg-white dark:bg-[#030712] py-10 lg:py-20 px-8 lg:px-40">
            <h2 className="text-teal-500 text-center font-semibold text-xl">Skills</h2>
            <p className="text-center my-10 text-gray-600 dark:text-gray-200">Below are some of the skills, tools and technologies I am really good at</p>

            <div className="flex gap-6 justify-center flex-wrap">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-between">
                        <img src={item.img} alt="" className="min-w-[50%] w-[50px] lg:w-[70px]" />
                        <p className="dark:text-gray-200">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
// grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center