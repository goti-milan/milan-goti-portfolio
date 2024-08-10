import React from 'react'
import NavbarMenu from './Navbar-menu'
import { IoMdAdd } from 'react-icons/io'

const Header = ({ openHeader, setOpenHeader, scrollToSection }) => {
    return (
        <div className='relative flex justify-end'>
            {openHeader &&
                <NavbarMenu
                    openHeader={openHeader}
                    setOpenHeader={setOpenHeader}
                    scrollToSection={scrollToSection}
                />}
            <button
                className={`h-16 transform transition-transform duration-1000 fixed ${openHeader ? 'rotate-45' : 'rotate-0'} top-5 right-5`}
                onClick={() => setOpenHeader(!openHeader)}>
                <IoMdAdd className='text-6xl text-[#ff4901]' />
            </button>

        </div>
    )
}

export default Header