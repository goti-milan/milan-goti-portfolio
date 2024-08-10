import React from 'react'

const SectionTitle = ({title}) => {
    return (
        <div className="text-dark-main " style={{ fontSize: "50px" }}>
              <span className="border border-main px-8 rounded-full hover:bg-main uppercase">
                {title}
              </span>
            </div>
          //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
          //   <div className="relative">
          //     <div className="bg-red-400 w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center hover:w-40 hover:pr-0">
          //       <span className="text-black whitespace-nowrap pl-2 opacity-100 hover:opacity-100 transition-opacity duration-300">Project</span>
          //     </div>
          //   </div>
          // </div>
    )
}

export default SectionTitle