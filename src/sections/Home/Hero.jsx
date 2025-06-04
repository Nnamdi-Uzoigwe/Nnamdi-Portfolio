
import Button from "../../components/Button";
import bitmoji from "../../assets/bitmoji.png";
import { Dot, Github, Linkedin, MapPin, Twitter } from "lucide-react";

export default function Hero() {
    return (
        <div className="pt-[150px] lg:pt-[200px] dark:bg-[#030712] px-8 lg:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10">
                <div className="text-gray-600 dark:text-white text-center lg:text-left">
                    <h4 className="text-xl lg:text-2xl font-semibold">Welcome to my page!</h4>
                    <h2 className="text-2xl lg:text-4xl font-semibold">I am <span className="text-teal-500">Nnamdi Uzoigwe,</span></h2>
                    <h2 className="text-2xl lg:text-4xl font-semibold">a Web and Mobile App Developer.</h2>
                    <p className="my-6 w-full lg:w-[70%]">
                        I create visually appealing interfaces and applications for clients
                        using the latest technologies in vogue.
                    </p>

                    <div className="my-4 flex justify-center lg:justify-start items-center gap-2">
                        <MapPin />
                        <span>Abuja, Nigeria.</span>
                    </div>
                    <div className="my-4 flex justify-center lg:justify-start items-center gap-2">
                        <Dot className="text-[#10B981]" />
                        <span>Open to freelance & full-time roles.</span>
                    </div>

                    <div className="flex justify-center lg:justify-start">  
                        <Button>Download CV</Button>
                    </div>

                    <div className="mt-4 icons flex justify-center lg:justify-start gap-3">
                        <Github />
                        <Twitter />
                        <Linkedin />
                    </div>
                </div>

                <div className="rounded-[20px]">
                    <img src={bitmoji} alt="Hero" className="w-full max-w-md" />
                </div>
            </div>
        </div>
    );
}
