import {
    Home,
    IdCard,
    FileText,
    DollarSign,
    MessageSquare,
    // Settings,
    LogOut,
} from "lucide-react";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: Home,
    },
    {
        name: "Birth Certificate",
        href: "/birth-certificate",
        icon: FileText,
    },
    {
        name: "National ID",
        href: "/national-id",
        icon: IdCard,
    },
    {
        name: "Passport",
        href: "/passport",
        icon: FileText,
    },
    {
        name: "Tax",
        href: "/tax",
        icon: DollarSign,
    },
    {
        name: "Complaint",
        href: "/complaint",
        icon: MessageSquare,
    },
    // {
    //     name: "Settings",
    //     href: "/settings",
    //     icon: Settings,
    // },
    {
        name: "Logout",
        href: "/logout",
        icon: LogOut,
        variant: "destructive",
    },
];

export default navigation;
