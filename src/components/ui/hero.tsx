const Hero = () => {
  return (
    <section
      className="relative bg-white flex justify-center items-center py-10 md:py-16 xl:pb-30"
      id="hero"
    >
      <div>
        {/* Background Image */}
        <img
          src="/assets/images/herosection-bg.png"
          alt="HeroSection background image"
          className="absolute inset-0 w-full h-auto lg:h-full"
        />
      </div>
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[85%] max-w-360 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-[50%] flex flex-col gap-5 md:gap-17.5 lg:gap-5 font-gilroy lg:font-serif font-extrabold lg:font-normal text-left lg:text-left items-left lg:items-start">
          <div className="flex flex-col gap-2 lg:gap-4.5">
            <div>
              <h1 className="text-h3 md:text-h2 lg:text-h1 leading-[1.15] text-black">
                Connect In{" "}
                <span className="text-h3 md:text-h2 lg:text-h1 leading-[1.15] text-primary">
                  Real Life
                </span>
              </h1>
            </div>
            <div>
              <p className="text-h5 font-normal font-sans leading-none text-text-body">
                Imagine knowing exactly where to go to find compatible singles
                in your area. On Scene provides you with a curated map of
                popular local hotspots – bars, coffee shops, restaurants, gyms
                and more – where like-minded individuals are actively checking
                in. On Scene transforms everyday locations into opportunities
                for serendipitous encounters. Our check-in feature allows you to
                be seen by others who are actively using the app, creating a
                sense of community and shared purpose. Check-in to get checked
                out!
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
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/assets/images/herosection-right-image.png"
            alt="On Scene App"
            className="w-full max-w-143.5 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
