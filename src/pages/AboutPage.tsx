import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Leaf, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="h-[1px] w-12 bg-kente-gold/50" />
              <span className="text-kente-gold uppercase tracking-[0.2em] text-xs font-bold">
                Who We Are
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[0.9]">
              Connecting you to the <br />
              <span className="italic text-gray-500 font-serif">soul</span> of
              Ghana.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
              We curate authentic journeys that go beyond the guidebooks,
              revealing the rhythm, warmth, and vibrant culture of West Africa.
            </p>
          </motion.div>
          {/* Abstract Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-kente-gold/20 to-transparent rounded-full blur-3xl" />
            <div className="relative border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <p className="text-2xl font-serif italic text-white/80 leading-relaxed">
                "Travel is fatal to prejudice, bigotry, and narrow-mindedness."
              </p>
              <p className="mt-4 text-sm text-kente-gold uppercase tracking-widest">
                — Mark Twain
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container mx-auto px-6 mb-32">
        <div className="border-t border-white/10 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-medium text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Founded on the belief that travel should be transformative,
                sustainable, and deeply personal.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              <div className="space-y-4">
                <MapPin className="text-kente-gold w-6 h-6" />
                <h3 className="text-lg font-medium text-white">
                  Curated Discovery
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We don't just visit places; we uncover stories. Our
                  itineraries are hand-crafted to show you the Ghana most
                  tourists miss.
                </p>
              </div>
              <div className="space-y-4">
                <Users className="text-kente-gold w-6 h-6" />
                <h3 className="text-lg font-medium text-white">
                  Local Connection
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Our guides are local experts, storytellers, and friends who
                  open doors to authentic community interactions.
                </p>
              </div>
              <div className="space-y-4">
                <Leaf className="text-kente-gold w-6 h-6" />
                <h3 className="text-lg font-medium text-white">
                  Sustainable Footprint
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We champion eco-friendly practices and ensure our tours
                  directly benefit the local communities we visit.
                </p>
              </div>
              <div className="space-y-4">
                <Globe className="text-kente-gold w-6 h-6" />
                <h3 className="text-lg font-medium text-white">
                  Seamless Journeys
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  From arrival to departure, we handle the details so you can
                  immerse yourself fully in the experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-none md:rounded-3xl p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-kente-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-kente-gold/20 transition-colors duration-700" />

          <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 relative z-10">
            Ready to explore?
          </h2>
          <a
            href="/"
            className="inline-flex items-center space-x-2 text-kente-gold hover:text-white transition-colors duration-300 border-b border-kente-gold hover:border-white pb-1"
          >
            <span className="uppercase tracking-widest text-sm font-bold">
              View Destinations
            </span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
