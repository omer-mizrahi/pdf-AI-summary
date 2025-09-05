import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import NavLink from "./NavLink";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {

    const isLoggedIn = false; // TODO: replace with real auth logic
    return (
        <nav className="container flex items-center justify-between py-4 px-2 mx-auto lg:py-8">
            <div className="flex lg:flex-1">
                <NavLink href={"/"} className="flex items-center gap-1 lg:gap-2 shrink-0">
                    <FileText className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12
                    transform transition duration-200 ease-in-out" />
                    <span className="font-extrabold lg:text-xl text-gray-900">Perra</span>
                </NavLink>
            </div>
            <div className="flex gap-4 lg:justify-center lg:gap-12 lg:items-center">
                <NavLink href={"/#pricing"}>Pricing</NavLink>
                <SignedIn>
                    <NavLink href={"/dashboard"}>Your Summaries</NavLink>
                </SignedIn>
            </div>
            <div className="flex lg:flex-1 lg:justify-end">
                <SignedIn><div className="flex gap-2 items-center">
                    <NavLink href={"/upload"}>Upload a PDF</NavLink>
                    <span className="text-sm font-semibold">Pro</span>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                </SignedIn>
                <SignedOut>
                    <NavLink href={"/sign-in"}>Sign-In</NavLink>
                </SignedOut>
            </div>
        </nav>
    )
}