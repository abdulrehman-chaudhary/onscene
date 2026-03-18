import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

export type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Contact us", href: "/contact" },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full bg-white flex justify-center items-center">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[87%] max-w-360 flex items-center justify-between py-4 md:py-5">
        <div className="flex items-center gap-3">
          {/* Hamburger */}
          <div>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <img
              src="/assets/svgs/hamburger-icon.svg"
              alt="Menu"
              className="w-6 md:w-7 h-auto invert"
            />
          </button>
          </div>
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <img
              src="/assets/svgs/header-logo.svg"
              alt="OnScene Logo"
              className="object-contain w-26 md:w-32 lg:w-32.5"
            />
          </div>
        </div>
        {/* Navigation Links */}
        <div className="hidden lg:flex flex-1 justify-center gap-4 xl:gap-5">
          {navLinks?.map((link) => (
            <Link
              key={link?.name}
              to={link?.href}
              className="text-black transition-all duration-300 font-medium text-body-lg hover:text-gray-900"
            >
              {link?.name}
            </Link>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex justify-end">
          <button className="cursor-pointer text-primary px-2 py-1 sm:px-6 sm:py-2.5 border-[1.5px] border-primary rounded-[10px] font-medium hover:bg-primary hover:text-white transition-all duration-300 text-small sm:text-body-lg">
            Download App
          </button>
        </div>
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        menuItems={navLinks}
      />
    </header>
  );
};

export default Header;
