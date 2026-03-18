const MobileInterface = () => {
    return (
        <section
            className="relative bg-primary-lighter flex justify-center items-center py-12 md:py-20 lg:pt-24 lg:pb-0 overflow-hidden"
            id="mobile-interface"
        >
            {/* Like Icon */}
            <div className="absolute lg:top-20 -left-7 z-30 w-21 h-21 bg-[#F44277] rounded-full hidden lg:flex items-center justify-center shadow-md transform -rotate-12">
                <img
                    src="/assets/svgs/smiley.svg"
                    alt=""
                    className="w-10 h-10 rotate-12"
                />
            </div>
            {/* Arrow Icon */}
            <div className="absolute top-0 right-20 md:right-32 lg:right-80 z-30 transform w-20 md:w-32 lg:w-40 xl:w-35 xl:h-35 hidden sm:block">
                <img
                    src="/assets/svgs/arrow-icon.svg"
                    alt=""
                    className="w-full h-auto object-contain"
                />
            </div>
            <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[84%] max-w-360 relative flex flex-col lg:flex-row gap-15 md:gap-25 lg:gap-1 items-center justify-between ">
                <div className="absolute top-0 right-0 lg:-right-8 xl:-right-16 hidden lg:block">
                    <img
                        src="/assets/svgs/heart-icon-2.svg"
                        alt=""
                        className="w-8 h-8 lg:w-21 lg:h-21"
                    />
                </div>
                <div className="absolute bottom-5 left-0 lg:left-75 w-21 h-21 bg-[#916EFF] rounded-full hidden lg:flex items-center justify-center shadow-md transform -rotate-12">
                    <img
                        src="/assets/svgs/heart-symbol.svg"
                        alt=""
                        className="w-10 h-10 rotate-12"
                    />
                </div>
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20 gap-10 order-2 lg:order-1 relative">
                    <div className="flex flex-col gap-8 items-center lg:items-start">
                        <div className="rounded-full flex items-center justify-center shadow-sm">
                            <img
                                src="/assets/svgs/mobile-interface-icon.svg"
                                alt="Mobile Interface"
                                className="w-8 h-8 lg:w-15 lg:h-15"
                            />
                        </div>
                        <div>
                            <h2 className="text-h3 font-normal font-serif leading-1 text-black">
                                Mobile Interface
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-text-body leading-[100%] max-w-96 font-sans font-normal">
                                Meet real people in real places. Find compatible singles.
                                Check in, get seen!
                            </p>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <button
                            type="button"
                            className="cursor-pointer flex items-center justify-center gap-1.25 bg-primary text-white px-2.75 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                        >
                            <img
                                src="/assets/svgs/apple.svg"
                                alt="Apple"
                                className="w-6 h-6 brightness-0 invert"
                            />
                            <span className="text-[18px] font-normal font-sans">
                                Apple Store
                            </span>
                        </button>
                        <button
                            type="button"
                            className="cursor-pointer flex items-center justify-center gap-1.25 bg-transparent text-primary border-2 border-primary px-3.75 py-2 rounded-xl hover:bg-[#fff0f3] transition-colors"
                        >
                            <img
                                src="/assets/svgs/playstore.svg"
                                alt="Play Store"
                                className="w-6 h-6"
                            />
                            <span className="text-[18px] font-normal font-sans">
                                Play Store
                            </span>
                        </button>
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-full flex justify-center lg:justify-end relative order-1 lg:order-2 max-h-112.5 md:h-150 lg:max-h-100 lg:max-w-130 xl:max-h-141.5 xl:max-w-180.75 ">
                    <img
                        src="/assets/images/mobile.png"
                        alt="On Scene Mobile Interface"
                        className="object-cover max-h-full w-auto z-20 drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default MobileInterface;
