import React from 'react'
import { BiArrowFromLeft, BiArrowToRight } from 'react-icons/bi'
import { CgArrowRight } from 'react-icons/cg'
import StyledButton from './StyledButton'

const Contact = () => {
  return (
    <div className='p-3 bg-dark-main'>
      <div className='text-light-main' style={{ fontSize: "100px" }}>
        Contact
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-main">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-main shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

          </div>

          <div className="">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-main">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-main shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-orange-00 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-main">
              Subject
            </label>
            <div className="mt-2.5">
              <input
                id="subject"
                name="Subject"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black-700 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-main focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-main">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-main shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

        </div>
        <div className="mt-10">
          <StyledButton title={`Let's Talk`} />
        </div>
      </form>
    </div>
  )
}

export default Contact