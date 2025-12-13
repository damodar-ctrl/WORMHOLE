import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import NeonHexagon from "./svgs/neonHexagon";

function Faq() {
  const {
    home: { faq },
  } = useContext(ConfigContext)!;
  const [activeIndex, setActiveIndex] = useState<number>();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Function to check if current theme is dark
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      // List of dark themes
      const darkThemes = ["dark", "synthwave", "halloween", "forest", "black", "luxury", "dracula", "night", "coffee", "dim", "sunset", "business"];
      setIsDarkTheme(darkThemes.includes(theme || "") || theme === null);
    };

    // Check theme on mount
    checkTheme();

    // Listen for theme changes using MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  if (!faq) return null;

  return (
    <section
      id={faq.id}
      className="relative max-w-screen-lg mx-auto px-4 mb-12 overflow-hidden rounded-3xl"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
        src="/wormholevideo/wormhole.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="relative flex flex-col md:flex-row py-8">
        <div className="relative flex-1 flex items-center">
          <NeonHexagon />
          <div className="h-full w-full flex items-center justify-center">
            <h3 className={clsx(
              "text-center font-bold text-3xl flex flex-col items-center mb-8 md:mb-0 md:text-left",
              !isDarkTheme && "text-white"
            )}>
              <AnimatedText text={faq.title} initial={{ y: "0%" }} />
            </h3>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1"
        >
          {faq.qa.map((qa, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: 0.25 + index * 0.25 }}
              className={clsx(
                "border-2 border-primary/30 my-2 collapse collapse-arrow backdrop-blur",
                {
                  "collapse-open": activeIndex === index,
                },
                // Use dark background in light theme to contrast with video
                isDarkTheme ? "bg-base-100/70" : "bg-neutral/80 text-neutral-content"
              )}
            >
              <button
                onClick={() =>
                  setActiveIndex((current) =>
                    current === index ? undefined : index
                  )
                }
                className="text-start collapse-title text-lg font-medium"
              >
                {qa.question}
              </button>
              <div
                className={clsx(
                  "grid grid-rows-[0fr] duration-300 transition-[grid-template-rows,padding]",
                  {
                    "grid-rows-[1fr] pb-4": activeIndex === index,
                  }
                )}
              >
                <p className="overflow-hidden mx-4 opacity-[.7]">{qa.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;

