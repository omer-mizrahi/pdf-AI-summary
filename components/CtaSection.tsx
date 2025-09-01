import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="bg-gray-100 backdrop-blur-lg">
            <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center text-center">
                    <div>
                        <h2 className="font-bold text-2xl mb-2">Ready to Save Hours of Reading Time?</h2>
                        <p className="text-sm text-gray-600">
                            Transform lengthy documents into clear, actionable
                            insights with
                            our AI-Powered summarizer
                        </p>
                    </div>
                </div>
                <div className="flex justify-center flex-row py-4 ">
                    <Button
                        size={"lg"}
                        variant={"link"}
                        className="px-8 max-w-2xl bg-linear-to-r from-slate-900
                     to-rose-500 hover:from-rose-500 hover:to-slate-900 transition-all duration-300
                      text-white flex items-center hover:no-underline">
                        <Link href={"/#pricing"} className="flex items-center gap-2">
                            <span>Get Started</span>
                            <ArrowRight className="animate-pulse" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}