import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

type CustomBadgeProps = {
    text: string;
    icon: React.ReactNode;
    className?: string;
}
export default function CustomBadge({ text, icon, className }: CustomBadgeProps) {
    return (
        <div>
            <div className={cn(`relative p-[1px] rounded-full overflow-hidden 
                    bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group`, className)}>
                <Badge variant="secondary"
                    className="relative px-6 py-2 bg-white rounded-full 
                    group-hover:bg-rose-50 transition-colors duration-200 flex gap-2">
                    <div>{icon}</div>
                    <p className="text-rose-600">{text}</p>
                </Badge>
            </div>
        </div>
    )
}