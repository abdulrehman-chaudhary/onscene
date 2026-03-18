const AboutUsHero = () => {
    return (
        <section className="w-full flex justify-center py-12 md:pt-12.5 md:pb-15 lg:py-24 bg-white">
            <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[85%] max-w-360 flex flex-col gap-12 md:gap-20 xl:gap-37.5">
                <div className="text-center w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-gilroy text-black">
                        About Us
                    </h1>
                </div>
                {/* Main Content */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-5">
                    {/* Left Text */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
                        <h2 className="text-[30px] md:text-h2 font-bold font-gilroy leading-[1.2] text-black">
                            From A Simple Question–
                            Where Do I Meet People?–
                            <span className="text-primary">This App Blossomed...</span>
                        </h2>
                        <p className="text-text-body text-base md:text-lg leading-relaxed font-sans font-normal">
                            On Scene was developed as a simple solution to the
                            seemingly complicated world of dating. Good men and
                            good women are everywhere - it's just about knowing
                            where to go to meet them. We've created a platform to
                            take out the guesswork and give you the power to meet
                            compatible singles in real life, in real time.
                        </p>
                    </div>
                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 xl:w-[55%] flex justify-center lg:justify-end order-1 lg:order-2">
                        <img
                            src="/assets/images/aboutus-image-1.png"
                            alt="Couple on a date"
                            className="w-full h-auto rounded-[20px] object-cover shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsHero;
