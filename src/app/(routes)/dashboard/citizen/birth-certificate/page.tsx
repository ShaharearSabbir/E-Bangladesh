import Link from "next/link";
import React from "react";

type Card = {
    title: string;
    desc: string;
    href: string;
    bg: string;
};

const obj: Card[] = [
    {
        title: "New Application",
        desc: "Apply for new Birth Certificate",
        href: "/dashboard/citizen/birth-certificate/birthApplyForm",
        bg: "bg-rose-500",
    },
    {
        title: "Track Application",
        desc: "Track your submitted application status",
        href: "/dashboard/citizen/birth-certificate/trackApplication",
        bg: "bg-blue-500",
    },
    {
        title: "Update Application",
        desc: "Update application if there is an issue (with applicable fee)",
        href: "/dashboard/citizen/birth-certificate/updateApplication",
        bg: "bg-yellow-500",
    },
    {
        title: "Reprint Certificate",
        desc: "Download or reprint issued certificate",
        href: "/dashboard/citizen/birth-certificate/reprint",
        bg: "bg-green-500",
    },
];
const Page: React.FC = () => {
    return (
        <div className="px-10 mt-6">
            <h1 className="text-2xl font-semibold">Birth Certificate</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                {obj.map((o, index) => (
                    <Link
                        key={index}
                        href={o.href}
                        className={`py-10 px-8 ${o.bg} space-y-2 rounded-2xl text-white text-center
                            shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform
                            hover:scale-102 hover:-translate-y-1 hover:shadow-xl`}
                    >
                        <h3 className="text-2xl font-bold">{o.title}</h3>
                        <p className="text-sm">{o.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;
