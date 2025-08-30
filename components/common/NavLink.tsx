'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type navLinkProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export default function NavLink({ children, href, className }: navLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    return (
        <Link href={href}
            className={cn("text-gray-600 hover:text-rose-500 transition-colors duration-200 text-sm",
                className,
                isActive && "font-semibold text-rose-500")}
        >{children}</Link>
    )
}