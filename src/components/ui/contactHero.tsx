const ContactHero = () => {
  return (
    <section className="w-full flex justify-center py-12 md:py-20 lg:py-24 bg-white">
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[90%] max-w-360 bg-[#FDF3F1] relative overflow-hidden py-24 md:py-32 lg:py-35 flex justify-center items-center">
        {/* left ellipse */}
        <img
          src="/assets/svgs/top-ellipse.svg"
          alt=""
          className="hidden lg:block absolute top-0 left-0 w-auto h-auto md:w-62.5 md:h-auto z-0"
        />
        {/* right ellipse */}
        <img
          src="/assets/svgs/bottom-ellipse.svg"
          alt=""
          className="hidden lg:block absolute bottom-0 right-0 w-45 h-auto md:w-87.5 md:h-auto z-0"
        />
        {/* Icon Wrapper */}
        <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
          <div className="relative w-360 h-full shrink-0">
            {/* Like */}
            <img
              src="/assets/svgs/red-like-icon.svg"
              alt=""
              className="absolute top-60 left-32.5 w-24 h-auto z-10"
            />
            {/* Purple Heart */}
            <img
              src="/assets/svgs/purple-heart-icon.svg"
              alt=""
              className="absolute bottom-15 left-100 w-25 h-auto z-10"
            />
            {/* Top Pink Heart */}
            <img
              src="/assets/svgs/red-heart-icon.svg"
              alt=""
              className="absolute -top-9.75 left-117.5 w-26 h-auto z-10"
            />
            {/* Like */}
            <img
              src="/assets/svgs/red-like-icon.svg"
              alt=""
              className="absolute -bottom-5 right-117.5 w-24 h-auto z-10"
            />
            {/* Pink Heart */}
            <img
              src="/assets/svgs/red-heart-icon.svg"
              alt=""
              className="absolute top-30 right-67.5 w-26 h-auto z-10"
            />
            {/*Purple Heart */}
            <img
              src="/assets/svgs/purple-heart-icon.svg"
              alt=""
              className="absolute top-67.5 right-32.5 w-25 h-auto z-10"
            />
          </div>
        </div>
        {/* Text */}
        <div className="relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-[44px] xl:text-h1 font-extrabold font-gilroy text-black text-center">
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
