import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Testimonial = {
  name: string;
  username: string;
  avatar: string;
  text: string;
};

const testimonialsData: Testimonial[] = [
  {
    name: "Gustavo",
    username: "Jeremy Hoarau",
    avatar: "/assets/svgs/testimonials-icon-1.svg",
    text: "On Scene changed everything! Leaving home is exciting now because I know where to go meet like minded people!",
  },
  {
    name: "Chris",
    username: "Chris Nelson",
    avatar: "/assets/svgs/testimonials-icon-2.svg",
    text: "Dating apps failed me. On Scene allowed me to meet real people and find real connections. Love it!",
  },
  {
    name: "Charles",
    username: "Charles Green",
    avatar: "/assets/svgs/testimonials-icon-3.svg",
    text: "No more wondering where to find singles IRL. This app solves that, providing a platform to meet people in real places, making finding your match easier than ever.",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="w-full flex justify-center py-12 md:py-20 lg:py-24 bg-white"
      id="testimonials"
    >
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[70%] max-w-7xl flex flex-col md:flex-col items-center md:items-start justify-between gap-10">
        <div className="flex flex-col w-full gap-7.5">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-normal font-serif leading-tight text-black">
              Hear From Our Users
            </h2>
          </div>
          <div className="flex align-left">
            <img
              src="/assets/svgs/quote.svg"
              alt="Quote"
              className="w-11.25 h-10 md:w-28.5 md:h-28.5"
            />
          </div>
        </div>
        {/* Embla */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {testimonialsData.map((testimonial, index) => (
              <div
                className="flex-[0_0_100%] flex flex-col gap-7.5 min-w-0"
                key={index}
              >
                <div className="flex items-center">
                  <img
                    src="/assets/svgs/testimonials-stars.svg"
                    alt="5 Stars Rating"
                    className="h-6 w-auto"
                  />
                </div>
                <div>
                  <p className="text-text-body text-[17px] leading-[1.6] font-sans font-semibold min-h-25 max-w-120">
                    {testimonial.name} "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.username}
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                    />
                  </div>
                  <div>
                    <p className="font-bold font-sans text-black text-base">
                      {testimonial.username}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 w-full lg:hidden">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === activeIndex ? "bg-primary" : "bg-[#DCDDE0]"
              }`}
            />
          ))}
        </div>
        {/* Indicators */}
        <div className="hidden lg:flex items-center gap-2 w-full">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.25 rounded-full grow  cursor-pointer transition-colors duration-300 ${
                index === activeIndex ? "bg-primary" : "bg-[#DCDDE0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
