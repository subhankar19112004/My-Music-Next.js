"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem,  } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-6", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Home"
                    ></MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div
                        className="flex flex-col gap-2"
                    >
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">All courses</p></HoveredLink>
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">Basic Music Theory</p></HoveredLink>
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">Advanced Composition</p></HoveredLink>
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">Song Writting</p></HoveredLink>
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">Music Production</p></HoveredLink>
                    </div>
                </MenuItem>
                
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact Us"
                    >
                        <div className="flex flex-col gap-2">
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">Email us</p></HoveredLink>
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">Call us</p></HoveredLink>
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">Any social pages</p></HoveredLink>
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">WhatsApp</p></HoveredLink>
                        <HoveredLink href="/courses"><p className="hover:text-gray-500">Feedback</p></HoveredLink>
                        </div>
                    </MenuItem>
                
            </Menu>
        </div>
    );
}

export default Navbar;
