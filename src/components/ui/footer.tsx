import { useState } from "react";
import { Link } from "react-router-dom";

type SocialLink = {
    name: string;
    href: string;
    icon: string;
};

type FooterLink = {
    name: string;
    href: string;
};

const socialLinks: SocialLink[] = [
    { name: "Facebook", href: "#", icon: "/assets/svgs/facebook-logo.svg" },
    { name: "Instagram", href: "#", icon: "/assets/svgs/insta-logo.svg" },
    { name: "Twitter", href: "#", icon: "/assets/svgs/snapchat-logo.svg" },
    { name: "LinkedIn", href: "#", icon: "/assets/svgs/messenger-logo.svg" },
];

const indexLinks: FooterLink[] = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Contact Us", href: "/contact" },
];

const legalLinks: FooterLink[] = [
    { name: "Terms & Condition", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
    const [openSection, setOpenSection] = useState<string>("Index");

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? "" : section);
    };

    return (
        <footer className="bg-black text-white flex justify-center items-center py-10 md:py-16 xl:py-22.5">
            <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[84%] max-w-360 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-24">
                {/* Mobile Section */}
                <div className="flex lg:hidden flex-col items-center gap-8 w-full">
                    <Link to="/" className="inline-block">
                        <img src="/assets/svgs/footerlogo.svg" alt="On Scene" className="h-auto w-57.5" />
                    </Link>
                    <div className="flex items-center gap-8.75 max-h-9">
                        {socialLinks.map((social) => (
                            <a key={social.name} href={social.href} className="hover:opacity-80 transition-opacity">
                                <img src={social.icon} alt={social.name} className="w-7 h-7" />
                            </a>
                        ))}
                    </div>
                </div>
                {/* Left Section */}
                <div className="hidden lg:flex flex-col gap-7.5">
                    <Link to="/" className="inline-block">
                        <img src="/assets/svgs/footerlogo.svg" alt="On Scene" className="h-auto w-57.5" />
                    </Link>
                    <div className="flex items-center gap-8.75 max-h-9">
                        {socialLinks.map((social) => (
                            <a key={social.name} href={social.href} className="hover:opacity-80 transition-opacity">
                                <img src={social.icon} alt={social.name} className="w-7 h-7" />
                            </a>
                        ))}
                    </div>
                    <div className="text-small font-light text-white">
                        Copyright © 2024 SOS
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-32 w-full lg:w-auto">
                    {/* Index Menu */}
                    <div className="flex gap-5 flex-col w-full lg:w-auto">
                        <button
                            onClick={() => toggleSection("Index")}
                            className="flex justify-between items-center w-full lg:cursor-default text-left py-4 lg:py-0"
                        >
                            <h4 className="font-semibold text-h5 leading-1">Index</h4>

                            <span
                                className={`lg:hidden cursor-pointer transition-transform duration-300 ${openSection === "Index" ? "" : "rotate-180"
                                    }`}
                            >
                                <img src="/assets/svgs/up-arrow.svg" alt="chevron" className="w-5 h-5" />
                            </span>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 lg:h-auto lg:opacity-100 ${openSection === "Index"
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0 lg:max-h-none"
                                }`}
                        >
                            <div className="bg-[#F8F8F8] lg:bg-transparent rounded-2xl p-6 lg:p-0 flex flex-col gap-4 text-black lg:text-white">
                                {indexLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="text-body font-medium lg:font-normal hover:opacity-70 transition-opacity"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Legal Menu */}
                    <div className="flex gap-5 flex-col w-full lg:w-auto">
                        <button
                            onClick={() => toggleSection("Legal")}
                            className="flex justify-between items-center w-full lg:cursor-default text-left py-4 lg:py-0 lg:mb-7.5"
                        >
                            <h4 className="font-semibold text-h5 leading-1">Legal</h4>

                            <span
                                className={`lg:hidden cursor-pointer transition-transform duration-300 ${openSection === "Legal" ? "" : "rotate-180"
                                    }`}
                            >
                                <img src="/assets/svgs/up-arrow.svg" alt="chevron" className="w-5 h-5" />
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 lg:h-auto lg:opacity-100 ${openSection === "Legal"
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0 lg:max-h-none"
                                }`}
                        >
                            <div className="bg-[#F8F8F8] lg:bg-transparent rounded-2xl p-6 lg:p-0 flex flex-col gap-4 text-black lg:text-white">
                                {legalLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="text-body font-medium lg:font-normal hover:opacity-70 transition-opacity"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Copyright */}
                <div className="flex lg:hidden text-small font-light text-white pt-10  w-full justify-center">
                    Copyright © 2024 SOS
                </div>

            </div>
        </footer>
    );
};

export default Footer;