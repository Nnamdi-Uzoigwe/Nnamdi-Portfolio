// import Button from "../../components/Button";
// import hero from "../../assets/Column.png"
// import { Dot, Github, Linkedin, MapPin, Twitter } from "lucide-react";

// export default function Hero() {
//     return (
//         <div className="mt-[200px] px-40">
//             <div className="grid grid-cols-2 justify-items-center items-center">
//                 <div className="justify-self-end text-gray-600">
//                     <h4 className="text-2xl font-semibold">Welcome to my page!</h4>
//                     <h2 className="text-4xl font-semibold">I am Nnamdi Uzoigwe,</h2>
//                     <h2 className="text-4xl font-semibold">A Web and Mobile App Developer.</h2>
//                     <p className="my-6 w-[70%]">
//                         I create visually appealing interfaces and applications for clients
//                         using the latest technologies in vogue.
//                     </p>

//                     <div className="my-4 flex items-center">
//                         <span><MapPin /></span>
//                         Abuja, Nigeria.
//                     </div>
//                     <div className="my-4 flex items-center">
//                         <span><Dot /></span>
//                         Abuja, Nigeria.
//                     </div>
//                     <Button>Download CV</Button>

//                     <div className="mt-4 icons flex gap-3">
//                         <Github />
//                         <Twitter />
//                         <Linkedin />
//                     </div>
//                 </div>

//                 <div>
//                     <img src={hero} alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

import Button from "../../components/Button";
import hero from "../../assets/Column.png";
import { Dot, Github, Linkedin, MapPin, Twitter } from "lucide-react";

export default function Hero() {
    return (
        <div className="mt-[200px] px-40">
            <div className="grid grid-cols-2 items-center justify-items-center gap-10">
                <div className="text-gray-600">
                    <h4 className="text-2xl font-semibold">Welcome to my page!</h4>
                    <h2 className="text-4xl font-semibold">I am Nnamdi Uzoigwe,</h2>
                    <h2 className="text-4xl font-semibold">A Web and Mobile App Developer.</h2>
                    <p className="my-6 w-[70%]">
                        I create visually appealing interfaces and applications for clients
                        using the latest technologies in vogue.
                    </p>

                    <div className="my-4 flex items-center gap-2">
                        <MapPin />
                        <span>Abuja, Nigeria.</span>
                    </div>
                    <div className="my-4 flex items-center gap-2">
                        <Dot className="text-[#10B981]" />
                        <span>Open to freelance & full-time roles.</span>
                    </div>

                    <Button>Download CV</Button>

                    <div className="mt-4 icons flex gap-3">
                        <Github />
                        <Twitter />
                        <Linkedin />
                    </div>
                </div>

                <div>
                    <img src={hero} alt="Hero" className="w-full max-w-md" />
                </div>
            </div>
        </div>
    );
}
