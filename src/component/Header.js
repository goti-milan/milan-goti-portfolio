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
                className='h-16'
                style={{
                    transform: `rotateZ(${openHeader ? 45 : 0}deg)`,
                    transition: 'transform 1s',
                    position: 'sticky'
                }}
                onClick={() => setOpenHeader(!openHeader)}>
                <IoMdAdd className='text-6xl' style={{ color: '#ff4901' }} />
            </button>
        </div>
    )
}

export default Header