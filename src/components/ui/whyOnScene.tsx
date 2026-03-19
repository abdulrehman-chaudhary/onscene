import useEmblaCarousel from "embla-carousel-react";

type CarouselImageData = {
    src: string;
};

const carouselImages: CarouselImageData[] = [
    { src: "/assets/images/whyonscene-image.png" },
    { src: "/assets/images/whyonscene-image-2.png" },
    { src: "/assets/images/whyonscene-image.png" },
    { src: "/assets/images/whyonscene-image-2.png" },
];

const WhyOnScene = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
    });

    return (
        <section className="w-full flex justify-center py-12 md:py-20 lg:py-24 bg-white" id="why-on-scene">
            <div className="w-[95%] md:w-[88%] lg:w-[85%] xl:w-[85%] max-w-360 flex flex-col gap-12 lg:gap-16 xl:gap-30">
                {/* Heading */}
                <div data-aos="fade-up" className="text-center w-full">
                    <h2 className="text-4xl md:text-5xl lg:text-h1 font-bold font-gilroy leading-12.75 text-black">
                        Why <span className="text-primary">On Scene</span>?
                    </h2>
                </div>
                <div className="flex flex-col xl:flex-row items-center justify-between gap-10 lg:gap-8">
                    {/* Left Text */}
                    <div data-aos="fade-right" className="w-full xl:w-[40%] flex flex-col gap-6 lg:gap-8 text-center xl:text-left">
                        <h3 className="text-[30px] lg:text-h2 font-bold font-gilroy leading-[1.2] text-black">
                            Connect With Someone Special, <span className="text-primary">In Your Favorite Places</span>
                        </h3>
                    </div>
                    {/* Right Carousel */}
                    <div data-aos="fade-left" className="w-full xl:w-[60%] overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y flex-row gap-4 lg:gap-6 pl-2 lg:pl-0 cursor-grab active:cursor-grabbing">
                            {carouselImages.map((image, index) => (
                                <div
                                    className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_45%] min-w-0"
                                    key={index}
                                >
                                    <img
                                        src={image.src}
                                        className="w-full max-h-64 md:max-h-80 lg:max-h-75 object-cover rounded-3xl shadow-sm"
                                        draggable="false"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyOnScene;
