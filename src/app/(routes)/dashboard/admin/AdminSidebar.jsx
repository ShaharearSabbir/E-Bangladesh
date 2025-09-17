"use client";

import { Card } from "@/components/ui/card";
import SidebarContent from "../SidebarContent";
import navigation from "./adminNavigation "

const AdminSidebar = () => {
    return (
        <Card className="hidden md:flex h-screen w-64 rounded-none shadow-lg">
            <SidebarContent navigation={navigation} />
        </Card>
    );
};

export default AdminSidebar;
