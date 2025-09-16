"use client"
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface NavbarWrapperProps {
    children: ReactNode;
}

const NavbarWrapper = ({ children }: NavbarWrapperProps) => {
    const pathName = usePathname();
    const hiddenRoute = ['/login', '/register'];

    if (hiddenRoute.includes(pathName)) {
        return null;
    }

    return <>{children}</>;
};

export default NavbarWrapper;
