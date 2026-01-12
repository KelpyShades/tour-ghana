import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { places } from "@/data/places";

export default function PlaceDetailsPage() {
  const { id } = useParams();
  const place = places.find((p) => p.id === id);
  const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Destination Not Found</h2>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* 1. Hero Section */}
      <section className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${place.heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        <div className="sticky top-24 left-6 md:left-12 z-20 w-fit ml-6 md:ml-12 pt-12">
          <Link
            to="/"
            className="text-white hover:text-kente-gold transition-colors flex items-center gap-2 drop-shadow-lg"
          >
            <ArrowLeft /> Back to Explore
          </Link>
        </div>
        <div className="absolute -bottom-1 left-0 w-full h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white pb-12 z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-kente-gold font-bold uppercase mb-2">
                <MapPin className="w-5 h-5" />
                {place.location}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {place.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Description & Info */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            About this Destination
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            {place.fullDescription}
          </p>
          <p className="text-gray-400">
            Experience the magic of authentic Ghanaian culture and landscapes.
            This destination offers a unique blend of history, nature, and
            tranquility.
          </p>
        </div>
      </section>

      {/* 3. Gallery Carousel */}
      <section className="py-1">
        <div className="container mx-auto px-6 mb-8">
          <h2 className="text-3xl font-bold">Gallery</h2>
        </div>

        <div className="w-full overflow-hidden px-6" ref={emblaRef}>
          <div className="flex gap-4">
            {[place.heroImage, ...place.images].map((img, idx) => (
              <div
                key={idx}
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src={img}
                    alt={`Gallery ${idx}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
