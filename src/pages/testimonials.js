import React, { useState } from "react";
import SectionTitle from "../component/sectionTitle";
import Slider from "react-slick";
import { testimonialData } from "../utils/static";
import TestimonialCard from "../component/TestimonialCard";
import { BiArrowFromLeft, BiArrowToLeft } from "react-icons/bi";
import { BsArrowLeft, BsArrowLeftCircle, BsArrowRight, BsArrowRightCircle, BsArrowUpRightCircle, BsArrowUpRightCircleFill } from "react-icons/bs";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonial" className="bg-light-main w-full py-12">
      <div
        className="container mx-auto px-4"
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.1"
      >
        <SectionTitle title={"Testimonials"} />

        <div className="py-12">
            <div>
              <button><BsArrowLeftCircle/></button>
              <button><BsArrowRightCircle /></button>
            </div>
          <Slider {...settings}>
            {testimonialData.map((testimonial, index) => (
              <div className="p-4" key={index}>
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={index === activeSlide}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
