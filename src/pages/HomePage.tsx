import { useState, useCallback, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { places } from "@/data/places";
import { cn } from "@/lib/utils";
import MainHeroImage from "@/assets/main_hero.jpg";

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: false },
    [Autoplay({ delay: 10000, stopOnInteraction: true })]
  );

  const { scrollY } = useScroll();
  //make it slow
  const heroTextY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroTextOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const heroBackgroundY = useTransform(scrollY, [0, 800], [0, -150]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const activePlace = places[selectedIndex];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="flex flex-col">
      {/* 1. Main Landing Hero */}
      <section className="sticky top-0 h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center z-1">
        {/* Background Parallax/Video would go here, static for now */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${MainHeroImage})`,
            filter: "brightness(0.6)",
            opacity: heroOpacity,
            y: heroBackgroundY,
          }}
        />

        <div className="relative z-10 text-center text-white px-4">
          <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
                VISIT <span className="text-kente-gold">GHANA</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light mb-8">
                Discover the warmth, rhythm, and colors of West Africa.
              </p>
              {/* <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                Start Exploring
              </Button>
            </div> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>

        {/* Bottom Black Fade Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-20" />
      </section>

      {/* 2. Interactive Places Section */}
      {/* This section changes background based on active slide */}
      <section className="relative min-h-screen py-20 overflow-hidden flex items-center z-10 bg-black shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        {/* Dynamic Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlace.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${activePlace.heroImage})`,
              filter: "brightness(0.3) blur(2px)", // Increased blur and darkness
            }}
          />
        </AnimatePresence>

        {/* Content Container */}
        <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left: Text Content */}
          <div className="text-white space-y-6">
            <motion.div
              key={`${activePlace.id}-text`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4 text-kente-gold font-bold tracking-widest uppercase text-sm">
                <span className="w-12 h-[2px] bg-kente-gold" />
                {activePlace.location}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                {activePlace.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg line-clamp-3">
                {activePlace.description}
              </p>
              <Link to={`/place/${activePlace.id}`}>
                <Button
                  size="lg"
                  className="group text-lg px-8 bg-white text-black hover:bg-gray-200"
                >
                  Explore
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Carousel */}
          <div className="relative w-full md:max-w-xl mx-auto md:ml-auto md:mr-12">
            <div
              className="overflow-hidden p-4 md:-mr-20 [mask-image:linear-gradient(to_right,transparent,black_5%,black_80%,transparent)]"
              ref={emblaRef}
            >
              <div className="flex gap-6 px-3">
                {places.map((place, index) => (
                  <div
                    key={place.id}
                    className={cn(
                      "flex-[0_0_60%] md:flex-[0_0_280px] min-w-0 transition-all duration-500 cursor-pointer overflow-hidden rounded-xl border-2 border-transparent",
                      index === selectedIndex
                        ? "scale-105 border-white/20 shadow-2xl"
                        : "opacity-60 scale-95"
                    )}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  >
                    <div className="relative aspect-[3/4] group">
                      <img
                        src={place.images[0]}
                        alt={place.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white font-bold">{place.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Buttons placed outside or near title if preferred, but user said "Next to them is a carousel" */}
            <div className="flex gap-2 mb-4 justify-end">
              <button
                onClick={scrollPrev}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
