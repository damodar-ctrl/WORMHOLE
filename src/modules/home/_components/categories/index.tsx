import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";

function Categories() {
  const {
    home: { categories },
  } = useContext(ConfigContext)!;
  if (!categories) return null;

  return (
    <section id={categories.id ?? "categories"} className="max-w-screen-lg mx-auto px-4 py-12 scroll-mt-24">
      <div className="relative mb-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-3">
          <AnimatedText text={categories.title} />
        </h1>
        <motion.div
          animate={{ y: [0, -12, 0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="hidden sm:block absolute right-2 -top-10 md:right-8 md:-top-12 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden"
        >
          <img
            src={categories.floatingImage ?? categories.cards[0]?.icon}
            alt="floating"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </motion.div>
        <motion.div
          className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden [--w:220px] md:[--w:380px]"
          whileInView={{ width: "var(--w)" }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -100px 0px" }}
        />
        {categories.subtitle && (
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-md max-w-xl"
          >
            {categories.subtitle}
          </motion.p>
        )}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {categories.cards.map((card, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            transition={{ delay: 0.15 + index * 0.15 }}
            className="relative card shadow-md bg-base-100 border border-primary/10 overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15" />
            <div className="card-body items-center text-center">
              <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-2xl overflow-hidden mb-4">
                <img src={card.icon} alt="category" className="w-full h-full object-cover" />
              </div>
              <h3 className="card-title text-2xl font-bold">{card.title}</h3>
              <p className="opacity-80 text-sm">{card.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Categories;
