"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import sidebarLogo from "../../../assets/long logo.png";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType;
    variant?: string;
}

interface SidebarContentProps {
    navigation: NavItem[];
}

const SidebarContent = ({ navigation }: SidebarContentProps) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="border-b px-4    hidden md:block">
                    <Image src={sidebarLogo} alt="Citizen Portal" priority />
                </div>

                <nav className="flex flex-col p-4 gap-2">
                    {navigation
                        .filter((item) => item.name !== "Logout")
                        .map((item) => (
                            <Button
                                key={item.name}
                                variant="ghost"
                                className="justify-start"
                                asChild
                            >
                                <Link href={item.href}>
                                    <item.icon className="mr-2 h-4 w-4" /> {item.name}
                                </Link>
                            </Button>
                        ))}
                </nav>
            </div>

            <div className="p-4 border-t">
                {navigation
                    .filter((item) => item.name === "Logout")
                    .map((item) => (
                        <Button
                            key={item.name}
                            onClick={() => {
                                signOut();
                                toast.warning("User SignOut")
                                // router.push("/")
                            }}
                            variant={item.variant as "destructive" | "ghost"}
                            className="w-full justify-start"
                            asChild
                        >
                            <Link href={item.href}>
                                <item.icon className="mr-2 h-4 w-4" /> {item.name}
                            </Link>
                        </Button>
                    ))}
            </div>
        </div>
    );
};

export default SidebarContent;
