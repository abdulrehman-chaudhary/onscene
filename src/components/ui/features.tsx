type Feature = {
  title: string;
  description: string;
  icon: string;
};

const featuresData: Feature[] = [
  {
    title: "Create A Profile",
    description:
      "Add photos or stay anonymous. Fill out your preferences to find who and what you are looking for.",
    icon: "/assets/svgs/feature-1.svg",
  },
  {
    title: "Browse Scenes",
    description: "Know where to go at a glance to meet compatible singles.",
    icon: "/assets/svgs/feature-2.svg",
  },
  {
    title: "Check-In",
    description:
      "Check in to get checked out! Be sure to let local singles know where to find you, too!",
    icon: "/assets/svgs/feature-3.svg",
  },
  {
    title: "Start Chatting",
    description:
      "Send a direct message, dare the whole scene, blow a kiss...or say hello in person!",
    icon: "/assets/svgs/feature-4.svg",
  },
  {
    title: "Swipe",
    description: "Stay connected even when you stay at home.",
    icon: "/assets/svgs/feature-5.svg",
  },
];

const Features = () => {
  return (
    <section
      className="relative bg-white flex justify-center items-center py-10 md:py-16 xl:py-27.5"
      id="features"
    >
      <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[84%] max-w-360 relative z-10 flex flex-col justify-center items-center gap-8 sm:gap-10 xl:gap-20">
        {/* Header */}
        <div className="text-center md:w-1/2 lg:w-full">
          <h2 className="text-h3 md:text-h2 leading-12.75 font-extrabold lg:font-normal font-gilroy lg:font-serif text-black">
            Features Of{" "}
            <span className="text-h3 md:text-h2 leading-12.75 font-extrabold lg:font-normal font-gilroy lg:font-serif text-primary">
              On Scene
            </span>
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 lg:gap-15 xl:gap-y-15 xl:gap-x-11.25 w-full">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="relative flex h-25 w-25 items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-3.75 xl:w-[90%] leading-[100%]">
                <h3 className="text-body-xl font-normal font-gilroy text-black">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-text-body">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
