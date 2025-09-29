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
        href: "/dashboard/citizen/birth-certificate",
        icon: FileText,
    },
    {
        name: "National ID",
        href: "/dashboard/citizen/national-id",
        icon: IdCard,
    },
    {
        name: "Passport",
        href: "/dashboard/citizen/passport",
        icon: FileText,
    },
    {
        name: "Tax",
        href: "/dashboard/citizen/tax",
        icon: DollarSign,
    },
    {
        name: "Complaint",
        href: "/dashboard/citizen/complaint",
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
