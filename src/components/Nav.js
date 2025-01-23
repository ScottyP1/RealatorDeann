'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/Logo.png';
import { CiLinkedin, CiInstagram } from 'react-icons/ci';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white text-black h-16 flex items-center px-6 z-50 shadow-md">
            {/* Hamburger Menu for Mobile */}
            <div className="absolute left-4 sm:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                    className="text-black"
                >
                    {menuOpen ? (
                        <AiOutlineClose size={28} />
                    ) : (
                        <AiOutlineMenu size={28} />
                    )}
                </button>
            </div>

            {/* Logo Section */}
            <div className="flex mx-auto">
                <Link href='/'>
                    <Image
                        className="w-[80px] h-[60px] w-[] h-auto rounded-lg"
                        alt="logo"
                        src={Logo}
                    />
                </Link>
            </div>

            {/* Social Icons (Hidden on Mobile) */}
            <div className="hidden sm:flex absolute right-4 items-center space-x-6">
                <Link
                    href="https://www.linkedin.com/in/deanna-rothstein-428b68b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    <CiLinkedin size={24} />
                </Link>
                <Link
                    href="https://www.instagram.com/deannasmdhomes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                >
                    <CiInstagram size={24} />
                </Link>
            </div>

            {/* Navigation Links */}
            <div
                className={`${menuOpen ? 'block' : 'hidden'
                    } absolute top-16 left-0 w-full bg-white shadow-md sm:static sm:flex sm:items-center sm:space-x-6 sm:shadow-none sm:bg-transparent`}
            >
                <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 p-4 sm:p-0 text-sm">
                    <li className="hover:text-blue-400 transition-colors">
                        <Link href="#About-Deanna" className="block py-2">ABOUT DEANNA</Link>
                    </li>
                    <li className="hover:text-blue-400 transition-colors">
                        <Link href="#" className="block py-2">PROPERTIES</Link>
                    </li>
                    <li className="hover:text-blue-400 transition-colors">
                        <Link href="#" className="block py-2">HOME SEARCH</Link>
                    </li>
                    <li className="hover:text-blue-400 transition-colors">
                        <Link href="#connect" className="block py-2">CONNECT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
