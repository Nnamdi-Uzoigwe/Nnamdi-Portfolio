// import { ExternalLink } from "lucide-react";
// import Button from "../../components/Button";

// export default function ContactSection() {
//     return (
//         <div className="bg-white flex flex-col justify-center items-center py-20 px-8 lg:px-40">
//             <h4 className="underline mb-4">Contact Me</h4>

//             <p>Drop a message for me if you are looking for a developer, or if you want to make enquiries.</p>

//             <form className="mt-20 g-gray-100 rounded-xl border-2 border-gray-300 w-[400px] py-10 px-2 flex flex-col justify-center items-center">
//                 <div>
//                     <p className="font-semibold">Your Name</p>
//                     <input type="text" placeholder="name..." className="border-[2px] rounded-md w-[300px] py-2 px-1 border-gray-400" />
//                 </div>
//                 <div className="my-4">
//                     <p className="font-semibold">Your Message</p>
//                     <textarea placeholder="message..." className="border-[2px] rounded-md w-[300px] min-h-[150px] py-4 px-1 border-gray-400"></textarea>
//                 </div>
//                 <Button>Send <span> <ExternalLink /></span></Button>
//             </form>
//         </div>
//     )
// }

import { ExternalLink } from "lucide-react";
import Button from "../../components/Button";

export default function ContactSection() {
  return (
    <div className="bg-white dark:bg-[#030712] flex flex-col justify-center items-center py-10 lg:py-20 px-8 lg:px-40">
      <div className="text-center max-w-2xl">
        <h4 className="text-teal-500 text-center font-semibold text-xl">Contact Me</h4>
        <p className="text-gray-600 dark:text-gray-200 my-10">
          Drop a message if you're looking for a developer or have inquiries.
          I'll respond promptly!
        </p>
      </div>

      <form className="mt-6 bg-white dark:bg-[#1F2937] dark:text-gray-200 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg w-full max-w-md py-8 px-6 hover:shadow-xl transition-shadow duration-300">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Jane Doe"
            className="w-full px-4 py-2 dark:placeholder:text-gray-400 border border-gray-300 rounded-lg focus:ring-2  focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Hello! I'd like to discuss..."
            rows={5}
            className="w-full px-4 py-3 dark:placeholder:text-gray-400 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
          />
        </div>

        <div className="flex justify-center">
          <Button>
            Send Message
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </form>
    </div>
  );
}
