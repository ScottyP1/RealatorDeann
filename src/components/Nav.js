import Image from 'next/image';

import Logo from '../../public/Logo.png'
import { CiLinkedin, CiInstagram } from "react-icons/ci";

export default function Nav() {
    return (
        <nav className="fixed w-full bg-white text-black h-16 flex items-center px-6 z-50">
            {/* Navigation Links on the Left */}
            <div className="flex items-center space-x-4 mr-auto">
                <ul className="flex space-x-8 text-md">
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">
                        <a href="#" className="block py-2">ABOUT DEANNA</a>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">
                        <a href="#" className="block py-2">PROPERTIES</a>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">
                        <a href="#" className="block py-2">HOME SEARCH</a>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">
                        <a href="#connect" className="block py-2">CONNECT</a>
                    </li>
                </ul>
            </div>

            {/* Centered "Deanna Rothstein" */}
            <Image
                className='w-[100px] h-[60px] rounded-lg -translate-x-[180px]'
                alt='logo'
                src={Logo}
            />

            {/* Navigation Links on the Right (social icons section) */}
            <div className="flex items-center space-x-6 ml-auto">
                <a
                    href="https://www.linkedin.com/in/deanna-rothstein-428b68b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    <CiLinkedin size={42} />
                </a>
                <a
                    href="https://www.instagram.com/deannasmdhomes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                >
                    <CiInstagram size={42} />
                </a>
            </div>
        </nav>
    );
}
