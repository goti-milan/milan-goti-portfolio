import React from 'react';

const NavbarMenu = ({ openHeader, setOpenHeader, scrollToSection }) => {
    return (
        <div className={`absolute transform overflow-hidden rounded-lg bg-light-main text-left shadow-xl transition-all ${openHeader ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'} sm:my-8 sm:w-full sm:max-w-lg ${openHeader ? 'sm:translate-y-0' : 'sm:translate-y-4 sm:scale-95'}`}>
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <p
                    className="text-dark-main hover:bg-main cursor-pointer mb-2 cursor:pointer"
                    onClick={() => scrollToSection("home")}>Home</p>
                <p className="text-dark-main hover:bg-main cursor-pointer mb-2 cursor:pointer"
                    onClick={() => scrollToSection("about")}>About Me</p>
                <p className="text-dark-main hover:bg-main cursor-pointer mb-2 cursor:pointer" onClick={() => scrollToSection("skills")}>Skills</p>
                <p className="text-dark-main hover:bg-main cursor-pointer mb-2 cursor:pointer" onClick={() => scrollToSection("work")}>Work</p>
                <p className="text-dark-main hover:bg-main cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</p>
            </div>
        </div>
    );
};

export default NavbarMenu;