import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    ShieldCheck,
    BarChart3,
    LogOut,
} from "lucide-react";

const adminNavigation = [
    {
        name: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Users",
        href: "/admin/users",
        icon: Users,
    },
    {
        name: "Reports",
        href: "/admin/reports",
        icon: FileText,
    },
    {
        name: "Analytics",
        href: "/admin/analytics",
        icon: BarChart3,
    },
    {
        name: "Roles & Permissions",
        href: "/admin/roles",
        icon: ShieldCheck,
    },
    {
        name: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
    {
        name: "Logout",
        href: "/logout",
        icon: LogOut,
        variant: "destructive",
    },
];

export default adminNavigation;
