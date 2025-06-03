export default function Button({ children }) {
    return (
        <div className="bg-[#10B981] cursor-pointer py-3 px-8 rounded-lg flex items-center text-white justify-center w-fit">
            { children }
        </div>
    )
}