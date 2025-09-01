import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative mx-auto flex flex-col z-0
         items-center justify-center py-16 sm:py-20 lg:py-28 transition-all animate-in lg:px-12 max-x-7xl">
            <div className="">
                <div className="relative p-[1px] rounded-full overflow-hidden 
                    bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
                    <Badge variant="secondary" className="relative px-6 py-2 bg-white rounded-full 
                        group-hover:bg-rose-50 transition-colors duration-200">
                        <Sparkles className="h-8 w-8 text-rose-600 animate-pulse" />
                        <p className="text-rose-600">Powered by AI</p>
                    </Badge>
                </div>
            </div>
            <h1 className="text-center py-6 font-bold">
                Transform PDF into{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 px-2">concise</span>
                    <span className="absolute inset-0 bg-rose-200/50 -rotate-2 
                rounded-lg"></span>
                </span>
                {" "}summaries
            </h1>
            <h2 className="text-base sm:text-lg lg:text-2xl 
            text-center px-4 lg:px-0 lx:max-w-4xl text-gray-500">Get a beautiful summary reel of the document in seconds</h2>
            <Button variant={"link"}
                className="text-white rounded-full text-sm mt-6 sm:text-lg lg:text-xl
                px-6 sm:px-8 lg:px-10 py-4 sm:py-4 lg:py-6 lg:mt-12
                bg-linear-to-r from-slate-800 to-rose-500
                hover:from-rose-500 hover:to-slate-800 hover:-no-underline font-bold
                transition-colors duration-600 ease-in-out shadow-lg"
            >
                <Link href={"/#pricing"} className="flex items-center gap-2">
                    <span className="text-base">Try Perra</span>
                    <ArrowRight className="animate-pulse" />
                </Link>
            </Button>
        </section>
    )
}


// <div className="relative p-[1px] rounded-full overflow-hidden 
//                     bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
//     <Badge variant="secondary" className="relative px-4 py-2 bg-white rounded-full 
//                         group-hover:bg-gray-50 transition-colors duration-200">
//         <Sparkles className="h-8 w-8 text-rose-600 animate-pulse" />
//         <p className="text-rose-600 ">Powered by AI</p>
//     </Badge>
// </div>