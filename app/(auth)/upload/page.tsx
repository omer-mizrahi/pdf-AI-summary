import CustomBadge from "@/components/common/CustomBadge";
import { Sparkles } from "lucide-react";

export default function UploadPage() {
    return (
        <section className="relative mx-auto flex flex-col z-0
         items-center justify-center py-16 sm:py-20 lg:py-28 transition-all animate-in lg:px-12 max-x-7xl">
            <CustomBadge
                text="AI Powered Content Creation "
                icon={<Sparkles className="h-4 w-4 text-rose-600 animate-pulse" />} />
        </section>
    )
}