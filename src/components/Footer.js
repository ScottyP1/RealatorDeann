
import Link from "next/link";
import { CiLinkedin, CiInstagram } from "react-icons/ci";

export default function Footer({ id }) {
    return (
        <div className="bg-gray-600 mt-12 h-[300px] p-8" id={id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Left Column (Profile Image and Name) */}
                <div className="flex flex-col items-center justify-center">
                    <img
                        src='https://dtzulyujzhqiu.cloudfront.net/remaxone5413/profiles/1737597406_1773441.jpg'
                        alt="Profile Picture"
                        width={50}
                        height={50}
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <h2 className="mt-4 text-2xl font-semibold text-white">Deanna Rothstein</h2>
                    <p className="text-lg text-white mt-2">Real Estate Agent</p>
                    <p className="text-gray-300">PSA - Pricing Strategy Advisor, MRP - Military Relocation Professional</p>
                </div>
                {/* Middle Column (Contact Information) */}
                <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-xl font-semibold text-white">Contact Info</h3>
                    {/* <div className="text-white flex items-center space-x-2">
                        <span className="font-bold">Email:</span>
                        <span>deanna@example.com</span>
                    </div> */}
                    <div className="text-white flex items-center space-x-2">
                        <span className="font-bold">Cell:</span>
                        <span>(240) 538-7910</span>
                    </div>
                    <div className="text-white flex items-center space-x-2">
                        <span className="font-bold">Work:</span>
                        <span>(410) 535-6291</span>
                    </div>
                    <div className="text-white flex items-center space-x-2">
                        <span className="font-bold">Address:</span>
                        <span>23076 Three Notch Road
                            California, MD 20619</span>
                    </div>
                </div>

                {/* Right Column (Social Links) */}
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold text-white">Follow Me</h3>
                    <div className="flex space-x-4 mt-4">
                        <Link
                            href="https://www.linkedin.com/in/deanna-rothstein-428b68b6/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            <CiLinkedin size={60} />
                        </Link>
                        <Link
                            href="https://www.instagram.com/deannasmdhomes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:underline"
                        >
                            <CiInstagram size={60} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
