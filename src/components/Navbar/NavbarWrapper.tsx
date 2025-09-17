"use client";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarWrapperProps {
    children: React.ReactElement;
}

const NavbarWrapper = ({ children }: NavbarWrapperProps) => {
    const pathName = usePathname();
    const hiddenRoutes = ["/login", "/register", "/dashboard"];

    const isHidden = hiddenRoutes.some((route) => pathName.startsWith(route));

    if (isHidden) {
        return null;
    }

    return children;
};

export default NavbarWrapper;
