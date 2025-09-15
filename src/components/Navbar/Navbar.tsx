import React from 'react';
import NavbarWrapper from './NavbarWrapper';
import logo from "../../assets/logo without label.png"
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar = () => {
    return (
        <NavbarWrapper>

            <div className='container mx-auto py-3 flex  items-center justify-between'>

                <div className='flex items-center gap-2'>
                    <Image
                        src={logo}
                        alt="E-Bangladesh Logo "
                        className='w-16'
                    />
                    <div>
                        <h1 className='font-bold text-2xl'>E-Bangladesh</h1>
                        <p className='text-xs text-gray-500'>Digital service for a connected nation</p>
                    </div>
                </div>

                <div className='space-x-6'>
                    <Link href="/login"><Button variant={"outline"}>Login</Button></Link>
                    <Link href="/register"><Button className='bg-primary'>Register</Button></Link>
                </div>

            </div>
        </NavbarWrapper>
    );
};

export default Navbar;