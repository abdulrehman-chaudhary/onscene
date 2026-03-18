import { Link } from "react-router-dom";
import type { NavLink } from "./header";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
    menuItems: NavLink[];
};

const Sidebar = ({ isOpen, onClose, menuItems }: SidebarProps) => {
    return (
        <div
            className={`fixed top-0 right-0 h-screen w-full bg-white z-50 transition-transform duration-1000 flex flex-col items-center justify-center ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div>
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-50"
                    aria-label="Close menu"
                >
                    <img
                        src="/assets/svgs/close.svg"
                        alt="Close"
                        className="w-6 h-6 invert"
                    />
                </button>
            </div>
            {/* Links */}
            <div className="flex flex-col items-center gap-6">
                <div>
                    <ul className="flex flex-col gap-6 text-h5 font-medium text-center">
                        {menuItems?.map((item) => (
                            <li
                                key={item?.name}
                                onClick={onClose}
                                className="text-light-gray cursor-pointer hover:text-brand-blue transition-colors"
                            >
                                <Link to={item?.href}>{item?.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* CTA Button */}
                <div className="block p-[1.5px] rounded-xl border-2 border-primary">
                    <button className="text-primary px-4 py-1.5  rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 text-body-lg">
                        Download App
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
