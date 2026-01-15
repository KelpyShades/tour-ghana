import { motion } from "framer-motion";
import { Sun, Utensils, Users, Bus, MessageCircle } from "lucide-react";

export default function TravelGuidePage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-[1px] w-12 bg-kente-gold" />
            <span className="text-kente-gold uppercase tracking-[0.2em] text-xs font-bold">
              Travel Insights
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-medium tracking-tight text-white mb-6">
            Essential <br /> Ghana.
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Practical intelligence for the modern traveler. Navigate the
            culture, climate, and cuisine with confidence.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Weather - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-8 right-8 text-kente-gold/20 group-hover:text-kente-gold/40 transition-colors">
              <Sun size={64} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">
              Best Time to Visit
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              The dry season (Oct–Mar) is ideal. Expect sunny days and warm
              nights. <br />
              <span className="text-white mt-4 block font-medium">
                Pro tip: December is full of festivals.
              </span>
            </p>
          </motion.div>

          {/* Transport - Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2 bg-neutral-800 border border-white/10 rounded-3xl p-8 hover:border-kente-gold/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-kente-gold">
                <Bus size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">
                Getting Around
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Uber/Bolt are best for Accra city trips.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kente-gold rounded-full" />{" "}
                  Tro-tros: Experience local chaos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kente-gold rounded-full" />{" "}
                  Taxis: Negotiate first
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kente-gold rounded-full" />{" "}
                  STC: Reliable intercity
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Food - Regular Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-kente-gold">
              <Utensils size={24} />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Must-Eats</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Jollof Rice (Spicy), Fufu (Hearty), Kelewele (Sweet & Spicy).
            </p>
          </motion.div>

          {/* Culture - Regular Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-kente-gold">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Etiquette</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Always use your right hand to greet, eat, or pass items.
            </p>
          </motion.div>

          {/* Language - Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 bg-kente-gold text-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-black/10 rounded-2xl hidden md:block">
                <MessageCircle size={32} className="text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Speak Local</h3>
                <p className="text-black/70 max-w-md">
                  A little Twi opens many doors. Try these phrases.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8">
              <div className="bg-black/5 px-6 py-3 rounded-xl border border-black/5">
                <span className="block font-bold text-lg">Akwaaba</span>
                <span className="text-xs uppercase tracking-wider opacity-60">
                  Welcome
                </span>
              </div>
              <div className="bg-black/5 px-6 py-3 rounded-xl border border-black/5">
                <span className="block font-bold text-lg">Ete sen?</span>
                <span className="text-xs uppercase tracking-wider opacity-60">
                  How are you?
                </span>
              </div>
              <div className="bg-black/5 px-6 py-3 rounded-xl border border-black/5">
                <span className="block font-bold text-lg">Medaase</span>
                <span className="text-xs uppercase tracking-wider opacity-60">
                  Thank you
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
