import React, { useState } from 'react';
import { CgArrowRight } from 'react-icons/cg';

const StyledButton = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            type="submit"
            className="relative flex items-center gap-2 pr-2 py-1 bg-transparent border border-transparent text-main rounded-full hover:bg-main hover:text-white transition-colors duration-500 ease-in-out w-1/4 overflow-hidden"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            style={{
                transform: hovered ? 'translateX(6px)' : 'translateX(0)',
            }}
        >
            <span className="bg-main rounded-full p-2">
                <CgArrowRight className="text-white h-6 w-6" />
            </span>
            <span>Let's talk</span>
        </button>
    );
};

export default StyledButton;
