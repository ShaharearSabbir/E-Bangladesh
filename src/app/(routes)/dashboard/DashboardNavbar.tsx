"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import logo from "../../../assets/long logo.png";
// import SidebarContent from "./SidebarContent";
import { getUserFromDb } from "@/actions/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface User {
    UID: string
    email: string
    role: string
}

const DashboardNavbar = () => {
    const { data: session, status } = useSession();
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const fetchUser = async () => {
            if (status === "authenticated" && session?.user?.email) {
                const user = await getUserFromDb(session.user.email);
                setUser(user);
                console.log(user)
            }
        };
        fetchUser();
    }, [status, session]);


    return (
        <header className="w-full bg-white border-b shadow-md flex items-center justify-between px-4 h-16 md:pl-72">
            <div className="flex items-center gap-2">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-64">
                            <SheetHeader className="border-b p-4">
                                <SheetTitle>Citizen Portal</SheetTitle>
                            </SheetHeader>
                            {/* <SidebarContent /> */}
                        </SheetContent>
                    </Sheet>
                </div>
                <Image src={logo} alt="Dashboard Logo" className="h-8 w-auto md:hidden" />
            </div>

            <div className="flex items-center gap-4">
                {/* <div className="h-8 w-8 rounded-full bg-gray-200"></div> */}
                <span>{user?.email} | {user?.role} </span>
            </div>
        </header>
    );
};

export default DashboardNavbar;
