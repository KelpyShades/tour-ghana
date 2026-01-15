import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Do I need a visa to visit Ghana?",
    answer:
      "Yes, most travelers need a visa. You can apply at your nearest Ghanaian embassy. ECOWAS citizens are exempt.",
  },
  {
    question: "Is it safe for tourists?",
    answer:
      "Ghana is popularly known as one of the safest countries in West Africa. The people are hospitable, but standard travel precautions are always advised.",
  },
  {
    question: "What vaccinations are mandatory?",
    answer:
      "A Yellow Fever vaccination certificate is required for entry. Malaria prophylaxis is strongly recommended.",
  },
  {
    question: "Currency & Payments",
    answer:
      "The currency is the Ghanaian Cedi (GHS). Major hotels accept cards, but cash is essential for markets and taxis.",
  },
  {
    question: "Best time to visit?",
    answer:
      "October to March offers the most comfortable weather. December is peak season for cultural events and festivals.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
      >
        <span className="text-xl md:text-2xl font-medium text-white group-hover:text-kente-gold transition-colors">
          {question}
        </span>
        <span
          className={`text-white transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus size={24} strokeWidth={1} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-400 text-lg leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[1px] w-12 bg-kente-gold" />
                <span className="text-kente-gold uppercase tracking-[0.2em] text-xs font-bold">
                  Support
                </span>
              </div>
              <h1 className="text-5xl font-medium tracking-tight text-white mb-6">
                Common <br /> Questions
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Can't find what you're looking for? <br />
                <a
                  href="#"
                  className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-kente-gold transition-all"
                >
                  Contact our support team.
                </a>
              </p>
            </div>
          </div>

          {/* Questions Column */}
          <div className="lg:col-span-8">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  {...faq}
                  isOpen={openIndex === index}
                  toggle={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
