export default function Button({ children }) {
    return (
        <div className="bg-teal-500 hover:bg-teal-700 cursor-pointer py-3 px-8 rounded-lg flex items-center text-white justify-center w-fit">
            { children }
        </div>
    )
}