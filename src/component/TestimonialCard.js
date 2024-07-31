import React from 'react';

const TestimonialCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
            <img
                className="w-1/2 object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                alt="Person"
            />
            <div className="bg-gray-900 text-white p-8 flex flex-col justify-center w-1/2">
                <svg
                    className="h-10 w-10 mb-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A7.968 7.968 0 0112 15c1.886 0 3.63.657 5.035 1.75M13 5a7.968 7.968 0 01-2.121 5.121M5.121 6.879A7.968 7.968 0 0112 9c1.886 0 3.63-.657 5.035-1.75M19 5a7.968 7.968 0 01-2.121 5.121M6.879 6.879A7.968 7.968 0 0112 3c1.886 0 3.63.657 5.035 1.75M19 5a7.968 7.968 0 01-2.121 5.121M6.879 17.804A7.968 7.968 0 0112 21c1.886 0 3.63-.657 5.035-1.75"
                    />
                </svg>
                <p className="mb-4">
                    Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.
                </p>
                <div className="text-lg font-bold">Judith Black</div>
                <div className="text-sm text-gray-400">CEO of Workcation</div>
            </div>
        </div>
    );
};

export default TestimonialCard;
