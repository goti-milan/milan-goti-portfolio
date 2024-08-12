import React from "react";
import SectionTitle from "./sectionTitle";
import StyledButton from "./StyledButton";

const Contact = () => {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.05"
      className="bg-light-main w-full py-16"
    >
      <div className="bg-light-main p-6 md:p-12">
        <SectionTitle title={"Contact"} />

        <div className="bg-dark-main w-full max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-main"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-dark-main shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-main sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-main"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-dark-main shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-main sm:text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold leading-6 text-main"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-dark-main shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-main sm:text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-main"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-dark-main shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-main sm:text-sm"
                defaultValue={""}
              />
            </div>

            <div className="sm:col-span-2 mt-6">
              <StyledButton title={`Let's Talk`} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
