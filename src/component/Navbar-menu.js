import React from 'react'

const NavbarMenu = ({ openHeader, setOpenHeader }) => {


    return (
        <div
            className="absolute transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
        >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <p>Home</p>
                <p>About Me</p>
                <p>Technology</p>
                <p>Work</p>
                <p>Contact</p>


            </div>
        </div>
    )
}

export default NavbarMenu