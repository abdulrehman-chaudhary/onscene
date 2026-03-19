
const DownloadBanner = () => {
    return (
        <section
            className="relative bg-white flex justify-center items-center py-10 md:py-0 lg:py-16"
            id="download"
        >
            <div className="w-[95%] md:w-full lg:w-[85%] xl:w-[84%] max-w-360 relative z-10 ">
                <div className="flex flex-col lg:flex-row items-center justify-between bg-wink-pricing-light rounded-3xl p-5 lg:px-0 lg:pt-0 lg:p-0 relative min-h-110 gap-10 sm:gap-15 md:gap-20 lg:gap-5">
                    {/* Left Side */}
                    <div data-aos="fade-right" className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-12 relative min-h-50 md:min-h-87.5 lg:min-h-110">
                        <img
                            src="/assets/images/mobiles-remove.png"
                            alt="On Scene App interface"
                            className="absolute bottom-0 object-contain h-full w-full"
                        />
                    </div>
                    {/* Right Side */}
                    <div data-aos="fade-left" className="w-full lg:w-1/2 xl:w-[40%] flex flex-col justify-center items-center lg:items-start text-center gap-5 lg:text-left z-20 md:pb-16 lg:pb-0 lg:pr-1 xl:pr-2">
                        <div>
                            <p className="font-bold text-[18px] text-black tracking-wide font-sans">
                                Over 500+ Downloads
                            </p>
                        </div>
                        <div>
                            <h2 className="text-h3 lg:text-[35px] xl:text-[42px] font-normal font-gilroy lg:font-serif leading-none">
                                Download <span className="text-primary">On Scene</span> Mobile App
                            </h2>
                        </div>
                        <div>
                            <p className="text-h5 text-text-body max-w-md  font-sans font-normal">
                                Meet real people in real places. Find compatible singles. Check in, get seen!
                            </p>
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button type="button" className="flex items-center justify-center gap-1.25 bg-primary text-white px-2.75 py-2.5 rounded-xl hover:opacity-90 transition-opacity cursor-pointer">
                                <img src="/assets/svgs/apple.svg" alt="Apple" className="w-6 h-6 brightness-0 invert" />
                                <span className="text-[18px] font-normal font-sans">Apple Store</span>
                            </button>
                            <button type="button" className="flex items-center justify-center gap-1.25 bg-transparent text-primary border-2 border-primary px-3.75 py-2 rounded-xl hover:bg-[#fff0f3] transition-colors cursor-pointer">
                                <img src="/assets/svgs/playstore.svg" alt="Play Store" className="w-6 h-6" />
                                <span className="text-[18px] font-normal font-sans">Play Store</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadBanner;

