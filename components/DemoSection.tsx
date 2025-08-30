import { Pizza } from "lucide-react";

export default function DemoSection() {
    return (
        <section className="relative">
            <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="bg-gray-100/80 rounded-lg p-2 backdrop-blur-sm border border-gray-150">
                        <Pizza className="w-5 h-5 text-rose-500" />
                    </div>
                    <div className="text-center mb-6">
                        <h3 className="font-bold text-2xl max-w-2xl mx-auto px-4 sm:px-6"
                        >Watch how Perra transforms{" "}
                            <span className="bg-linear-to-r from-rose-500 to-rose-800 bg-clip-text text-transparent">this Next.js course PDF</span>
                            {" "}into an
                            easy-to-read summary!</h3>
                    </div>
                    <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
                        {/* Viewer */}
                    </div>
                </div>
            </div>
        </section>
    )
}