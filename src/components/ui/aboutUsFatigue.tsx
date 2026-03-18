const AboutUsFatigue = () => {
    return (
        <section className="w-full flex justify-center py-12 md:pt-15 md:pb-24 lg:py-24 bg-white">
            <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[85%] max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-22">
                {/* Left Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <img
                        src="/assets/images/aboutus-image-2.png"
                        alt="Couple experiencing authentic connection"
                        className="w-full lg:max-w-147.5 h-auto object-contain"
                    />
                </div>
                {/* Right Text */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-6.25 text-left">
                    <h2 className="text-3xl md:text-[30px] font-extrabold font-gilroy leading-none text-black">
                        Escape The Digital Dating Fatigue
                    </h2>
                    <p className="text-text-body text-base md:text-body  font-sans font-normal">
                        In a world saturated with superficial online interactions, On Scene offers a refreshing alternative. We understand the desire for authentic connections, the kind that spark from shared experiences and genuine chemistry. That's why we've built a platform that prioritizes meeting real people in real places.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutUsFatigue;
